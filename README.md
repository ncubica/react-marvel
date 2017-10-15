# react-marvel

Simple React-Redux App using the Marvel API

Concept in this small app :

- [x] react-router
- [x] redux
- [x] reducers
- [x] actions
- [x] class components
- [x] functions components
- [x] use of states and Redux state
- [x] basic middleware
- [x] react-promise (middleware package)
- [x] Marvel API using axios package  

# install

```
You can Git (clone) or download the zip file
inside of the folder :

npm install
npm start

that's it
```

`Webpack boilerplate from this great course https://www.udemy.com/react-redux/learn/v4/`


### Improvements to Be Made
- Could use Immutable.js to use immutable data structures to ensure no direct state mutation
- Move CSS inside JS, either importing separate CSS files for each component or a CSS-in-JS solution
- Hot reloading would be nice ;)
- Some way to control quantity of each hero
- Make it responsive
- Code splitting for better performance as the app grows
- Need to define container components that will receive state, perhaps naming them as BlankContainer to better differentiate them down the line. The rest can be functional components that receive relevant props from containers (this structure does currently exist, just need better labelling to avoid confusion down the line)
- Loading indicators, especially for search
- a focus on more generic components. E.g. HeroItem does not necessarily have anything to do with the Hero, so could be renamed ImageCard or something along those lines to encourage reuse.
- Some fancy animations, of course
- PropTypes for each component to document them better
- Tests tests tests!