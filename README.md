# Namaste React

...

# parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement (as soon as saving the changes made in the project, it reflects on the server without us to reload the whole page.)
- File watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of our files
- Bundling all our files
- Compress our files (like removing whiteSpace, unused Code and much more).
- Consistent Hashing
- Code Spliting
- Differential Bundling for different webbrowsers- to support older browsers
- Diagnostic
- Error handling
- hosting server on HTTPs
- Tree Shaking - remove unused code for us
- Different dev and production bundles

# Project Overview

- Configured this project using parcel as a Bundler, React to Create UI, Vanilla CSS, react Router@6 to navigate in the project, Redux is used for State management.
- Retrieving real time Data from swiggy api to populate the project
- Shimmer is used for user experience, before the data arrives.
- About.js page gets info from gitHub Rest api and the component is build using Class Components.
- Creating own custom hooks to make modules more readable.
- lazy loading is also used on About.js page for dynamic chunking of the files.
- status of internet connection is also added for secure connection between user and webApp.
- Testing the App using react testing library,jest and JsDOM

# Types of testing

- Unit Testing
- Integration testing
- End to End Testign - e2e testing

# Setting up testing in the app

- Install react Testing Library
- Install jest
- install babel dependencies
- Configure babel
- Configure Parcel config file to disable default babel transpilation, parcel will then ignore this config and override the default parcel config for JS.
- Jest Configuration (npx jest --init)
- install jsDom library
- Install @babel/preset-react to test jsx in the jsDom
- Include @babel/preset-react to the babel config
- install @testing-library/jest-dom
