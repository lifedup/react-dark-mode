const lsDark = window.localStorage.getItem('dark-mode');
const browserIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = (browserIsDark && lsDark === null) || lsDark === '1';
document.documentElement.classList[isDark ? 'add' : 'remove']('__dark');
const channel = new BroadcastChannel('dark-mode');
channel.onmessage = ({ data }) => {
  document.documentElement.classList[data ? 'add' : 'remove']('__dark');
};
