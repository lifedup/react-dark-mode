
# React Dark mode
Ultra light weight cross browser typescript example that is not complicated or over engineered and works in more scenarios than all other examples.
## Why is this not a package
I might make it one but for now, it's only around 60 lines of readable code total and there are a lot of lessons to be learned in each line.  The solution uses 3 different browser technologies and a few different react methodologies like keep state where it's used, don't rerender if you don't have to, and don't use global state if you don't need to.  The way the tech works together is the same way you would sync login/out state, shopping cart data, and any other stat that needs to be updated across browser tabs and windows.
## What is does not do
- Does not use global state or context
- Does not rerender app or any component on theme state change
- Does not flicker on initial load (SSR)
## What this does
 - Allows user to toggle between light and dark mode
 - Always shows correct theme state
 - Auto detects user's browser dark and light mode setting
 - Starts in user's default browser setting mode if the user hasn't set a preference for the site
 - Persists user's site theme preference between visits
 - Dark mode component does not have to be rendered on screen. It can be nested in a drop down menu, on a settings page, it does not matter where the toggle is placed.
 - Syncs state between all open browser tabs
 - Syncs state between all open browser windows
## Where it works
- Cross browser support
- Server side rendered app (i.e. Next or Gatsby)
- Client side rendered  (Vanilla react)
- Styled components
- Vanilla CSS (SCSS)
- CSS modules or SCSS Modules
- Works with cookies disabled (FF new tab or window breaks other solutions)
- Global component (i.e. always visible header)
- Nested component (i.e. hidden dropdown or context menu)
## What technology does it use
- CSS variables
- Browser broadcast
- Local storage
## How does it work?
It uses an old school approach with modern technology to create a really simple solution.  It toggles a class on the root element of the app where we define our color CSS variables.
## Why don't I need context like all the other examples?
we use CSS variables there is no need rerender the app which eliminates the need for a global context.  Also, the only component that needs state is the toggle component so that is the only place that has state.  Using this approach eliminates unnecessary rerenders and removes a lot of complexity.
## How to use
Download /clone package and then:
- navigate to example you want to use (/examples/*)
- run npm i or yarn
- run npm run * or yarn run * (* can either be dev or start depending on library default)

Example
- navigate to examples/nextjs
- run npm i
- run npm run dev