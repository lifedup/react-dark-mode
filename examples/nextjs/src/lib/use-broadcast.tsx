import React from 'react';

type UseBroadcast = (name: string, initialState: unknown) => [unknown, (value: unknown) => void];

const useBroadcast: UseBroadcast = (name, initialState) => {
  const [state, setLocalState] = React.useState(initialState);
  const channel = React.useRef<null | BroadcastChannel>(null);

  const setState = (value: unknown) => {
    if (channel.current) {
      channel.current.postMessage(value);
    }
    setLocalState(value);
  };

  React.useEffect(() => {
    if (typeof BroadcastChannel !== 'undefined') {
      channel.current = new BroadcastChannel(name);
      channel.current.onmessage = (event) => {
        const value = event.data as unknown;
        setLocalState(value);
      };
    }
    return () => {
      if (channel.current) {
        channel.current.close();
      }
    };
  }, [name]);

  return [state, setState];
};

export default useBroadcast;
