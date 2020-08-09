//did user set dark mode in previous visit
const lsDark = window.localStorage.getItem('dark_mode');
//is the browsers in dark mode
const browserIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// The only way the app can be in dark mode is if the user previously selected it
// or the browser is in dark mode that the user hasn't set the app to light mode
const isDark = (browserIsDark && lsDark === null) || lsDark === '1';
// add or remove the class __dark on the :root element (<html>)
document.documentElement.classList[isDark ? 'add' : 'remove']('__dark');
// Set up a channel to sync dark mode across tabs and windows.
const channel = new BroadcastChannel('dark_mode');
// listen for dark mode changes on other tabs and windows
channel.onmessage = ({ data }) => {
  document.documentElement.classList[data ? 'add' : 'remove']('__dark');
};