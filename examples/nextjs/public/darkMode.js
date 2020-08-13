const lsDark = window.localStorage.getItem('dark-mode') === '1';
const browserIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialState = (browserIsDark && lsDark === null) || lsDark;

if (typeof window.BroadcastChannel !== 'undefined') {
  const channel = new window.BroadcastChannel('dark-mode');
  channel.onmessage = ({ data }) => {
    window.localStorage.setItem('dark-mode', data ? '1' : '0');
    document.documentElement.classList[data ? 'add' : 'remove']('__dark');
  };
  let visibilityChange = 'visibilitychange';
  let hidden = 'hidden';
  if (typeof document.msHidden !== 'undefined') {
    visibilityChange = 'msvisibilitychange';
    hidden = 'msHidden';
  } else if (typeof document.webkitHidden !== 'undefined') {
    visibilityChange = 'webkitvisibilitychange';
    hidden = 'webkitHidden';
  }
  window.addEventListener(visibilityChange, () => {
    if (document[hidden]) {
      channel.postMessage(initialState);
    }
  });
}

document.documentElement.classList[initialState ? 'add' : 'remove']('__dark');
