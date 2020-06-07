---
title: How to setup Redux with React (2020)
date: "2020-06-07T22:40:32.169Z"
readTime: 8 min read
description: Complete setup of redux with react + bonus info at the end!
---

**[Redux](https://redux.js.org/)** _is probably the most_ popular _global state management library_ for react by far. It eliminates the problem of **[prop-drilling](https://kentcdodds.com/blog/prop-drilling)** and lets us manage the application state in a scalable way.

That’s enough introduction, now lets set it up in a react project!

Note: This article assumes that you understand the basics of redux. If not, please consider checking the **[redux documentation](https://redux.js.org/introduction/getting-started)** before moving forward.

**What is the goal of this blog?**

To understand and set up a classic _counter_ example using redux with [CRA](https://create-react-app.dev/docs/getting-started/).

A bonus section awaits you at the end!

_You can clone the final result of this blog from [here](https://github.com/bhatvikrant/react-redux-boilerplate)._

## **Step 1:** _Setup your react project_

You can set up a react project and configure _babel_, _webpack_ on your own _or_ instead you can use **[create-react-app](https://create-react-app.dev/docs/getting-started/)** to spin up a react project, and that is indeed what we are going to do now.

```bash
    $ npx create-react-app my-react-redux-app
```

Type the above command in your terminal / command prompt. Before this make sure that you have the latest version of **[node](https://nodejs.org/en/)** installed in your machine.

here, my-react-redux-app is the name of the project folder.

```bash
    $ cd my-react-redux-app

    $ npm start
```

Now change the directory _(cd)_ to my-react-redux-app and then start (_npm start_) the server by typing it in your terminal / command prompt.

And _voila!_ the react project is now setup. You should be able to see a screen similar to the following in your browser:

![](https://cdn-images-1.medium.com/max/2560/1*dUm_CRJoXeUZif3QBJ7RsQ.png)

## **Step 2: Install redux and react-redux**

```bash
    npm install redux react-redux
```

or

```bash
    yarn add redux react-redux
```

Now that we have installed the packages, we can proceed with the setup.

_[react-redux](https://react-redux.js.org/)_ lets us connect redux with our react application easily.

## **Step 3: Setup Redux Store in your index.js**

In this step, we will be modifying the _topmost_ component in our react project hierarchy i.e the parent of all components. It is important that we do this step on the topmost component because this ensures that our redux store is available to all the components.

Our **index.js** will look like:

```js
    --------------------------- index.js ---------------------------


    import React from 'react';

    import ReactDOM from 'react-dom';

    import './index.css';

    import App from './App';

    // REDUX

    import { Provider } from 'react-redux';

    import store from './redux/store';

    ReactDOM.render(

      <Provider store={store}>

        <React.StrictMode>

          <App />

        </React.StrictMode>

      </Provider>,

    document.getElementById('root'),

    );
```

here, we have imported something called ‘‘_Provider_’’ from _react-redux._

‘‘_Provider_’’ is a component provided to us by the _react-redux_ library. It wraps around our <App /> component. As you can see it also takes a prop called _store_ (which is our redux store).

> Before moving ahead, just for the sake of keeping our project structure organized, we will create a folder named **redux** in our src folder, and all of our redux specific code/logic will be inside this folder. This way we are making our project easy to read, test and scalable when the need arises.

> Now let's create our store.

create a file named **store.js** inside the ./src/redux directory. (path — ./src/redux/store.js)

```js
    ------------------------- ./src/redux/store.js ---------------------


    import { createStore } from 'redux';

    import rootReducer from './rootReducer';


    const store = createStore(rootReducer);


    export default store;
```

here, we use the **createStore()** function from redux, to create a store! (well that explanation was a bit redundant 😜 as the name itself is quiet self-explanatory). We can see that we have also imported a file called **rootReducer,** which we haven't created yet, so let's do that now,

> create a file named **rootReducer** inside the same directory as the store (i.e. path — ./src/redux/rootReducer.js)

```js
    --------------------- ./src/redux/rootReducer.js -------------------

    import { combineReducers } from 'redux';


    import counterReducer from './Counter/counter.reducer';


    const rootReducer = combineReducers({

        counter: counterReducer,

    });

    export default rootReducer;
```

here, **combineReducers()** as the name suggests combines various reducers into a single reducer. In redux, we can create as many reducers as we want. It is ideal to create a new reducer for every operation that doesn't depend on any other action. Since the **createStore()** in _store.js_ can take only one reducer, hence **combineReducer()** is used to convert multiple reducers into one.

With this, we have successfully created our **rootReducer,** but we can see that we have imported a file called **counterReducer** which again we haven't created yet😗. I know, I know it is a bit tedious but trust me and hang in there! You just have to do this once while setting up redux. Once the setup is done, it is a very smooth experience from there onwards.

**counterReducer** is the reducer function for the counter example that we talked of at the start. From the next step onwards we will start implementing our counter example.

## Step 4: Setup counter reducer/actions/types

Firstly, let's create a folder called **Counter** in our redux folder (path — ./src/redux/Counter).

Inside the Counter folder, let's create 3 files —

1. counter.types.js

1. counter.actions.js

1. counter.reducer.js

the file names are pretty self-explanatory of what they signify. (_let me know if you have any confusion with this, in the comments section below_)

let's create our **types** for the counter first. We will be needing two types, one for incrementing the counter and the other for decrementing.

```js
    --------------- ./src/redux/Counter/counter.types.js ---------------

    export const INCREMENT = 'INCREMENT';

    export const DECREMENT = 'DECREMENT';
```

here, we export both the constants, so that they can be imported in other files.

Next, let's create **actions** for the counter.

```js
    --------------- ./src/redux/Counter/counter.actions.js -------------


    import { INCREMENT, DECREMENT } from './counter.types';


    export const increaseCounter = () => {

        return {

            type: INCREMENT,

        };

    };

    export const decreaseCounter = () => {

        return {

           type: DECREMENT,

        };

    };
```

here, we import our types from **counter.types.js** file and pass them as types in their respective actions.

Now, let's create the **reducer** for our _counter_ example.

```js
    ------------------ ./src/redux/counter.reducer.js ------------------


    import { INCREMENT, DECREMENT } from './counter.types';


    const INITIAL_STATE = {

        count: 0,
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case INCREMENT:

               return {

                 ...state, count: state.count + 1,

               };

            case DECREMENT:

               return {
                  ...state, count: state.count - 1,

               };

             default: return state;

        }

    };

    export default reducer;
```

here, firstly we import our types at the top. then we declare a constant called _INITIAL_STATE_ this is going to be the default state for this specific reducer. After this, we create a function called _reducer_ which takes two arguments — state, action. The State takes an initial value of INITIAL_STATE, and action receives any data (payload) that is passed from our action creator from **counter.actions.js** file.

Inside the reducer function, we use a **[switch-case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)** from javascript and inside each case, we return the updated state. We use the **[spread operator (…)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)** to copy the state into our new object and then add what we want to change in the state.

> _⚠️_ _Always remember_: We never mutate the original state! Every time we have to make a change we return a new state object.

And in the end, we export our reducer, which is then imported in the \_rootReducer.js \_file.

With this, our reducer for the counter is ready! From the next step onwards we will write some JSX to display the increment and decrement buttons on our web app.

## Step 5: JSX for increment / decrement buttons

To demonstrate the use of redux in our web app we will have to show something on our web app. So we will be writing some basic JSX and then afterward we will connect it with our redux store.

> Let's open the **App.js** file (path — ./src/app.js)

Replace the existing boilerplate code with the following in your App.js

```js
    -------------------------- ./src/App.js ----------------------------

    import React from 'react';

    import './App.css';

    function App() {

    return (

      <div className='App'>

         <div>Count: 0</div>

         <button>Increase Count</button>

         <button>Decrease Count</button>

      </div>

     );

    }


    export default App;
```

here, we have just added two buttons that do nothing at the moment and we display a static count value.

![This is what you should be able to see in your browser](https://cdn-images-1.medium.com/max/2000/1*DL1LzMJeozJYUW77Ji2mNw.png)_This is what you should be able to see in your browser_

Now, let's connect the redux state and actions to this component in the next step.

## Step 6: Connect redux state/actions to a component

Now that everything else is set up, the final step is to use the redux state and actions in our component.

```js
import React from "react"

import "./App.css"

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"

function App(props) {
  return (
    <div className="App">
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
```

here, we import the **connect** function from the _react-redux_ library, we also import our **increaseCounter** and **decreaseCounter** actions.

The connect function is a **[Higher Order Component (HOC)](https://reactjs.org/docs/higher-order-components.html),** it basically takes a component and adds some more props to it and then returns the same component with newly added props. Check the last line of App.js file where we export the component, we can see that connect is being used here as follows,

```js
export default connect(mapStateToProps, mapDispatchToProps)(App)
```

connect takes two functions as arguments which are **_mapStateToProps_** and **_mapDispatchToProps_**.

Now let's see what these two functions do,

```js
const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}
```

**mapStateToProps** function as the name suggests maps the redux state to the props of the component it is declared in. So this basically adds whatever state you return from this function to your component. In our _counter example_, I have returned _count_ from the redux state and hence now I _can access count from props inside my App component._

**mapDispatchToProps** function does a very similar thing, but instead of adding state to props, it adds our **actions** to props! Whatever actions we return from this function are added to our component. And as you can see that in our example I have returned two actions i.e **increaseCounter** and **decreaseCounter,** hence we are able to access them from our props and then I release our actions on the respective button click.

With this now we have a fully functional react-redux app! If you liked the blog or have any queries, please let me know in the comments!

## BONUS: Adding redux-dev-tools to the project

> First, Download the **_chrome browser redux extension_** from [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

> Second, install the redux dev tools package from npm to your project, using the following command,

```bash
    npm install --save redux-devtools-extension
```

> Third, update your **store.js** to use the **composeWithDevtools** as follows,

```js
    ------------------------- ./src/redux/store.js ---------------------


    import { createStore } from 'redux';

    import { composeWithDevTools } from 'redux-devtools-extension';

    import rootReducer from './rootReducer';


    const store = createStore(

        rootReducer,

        composeWithDevTools(),

    );


    export default store;
```

and that's it! Now you can access chrome dev tools for redux!

The chrome dev tools for redux looks something like this:

![](https://cdn-images-1.medium.com/max/2560/1*hhhRoO-hjRg7yw1FGfe2fw.png)

_You can clone the final result of this blog from [here](https://github.com/bhatvikrant/react-redux-boilerplate)._
