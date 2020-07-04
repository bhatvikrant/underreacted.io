---
title: Redux-persist (v6) in detail (React)
date: "2020-07-05T22:40:32.169Z"
readTime: 3 min read
description: How to persist redux store across browser refresh
---

![Persistense is the key to success](https://media.giphy.com/media/H4buZ6PLgwsKjA9hlO/giphy.gif)

Whenever you reload your app, the javascript process has nothing in memory. You will have to re-initialize state, and maybe set some basic state based on the url (if you are in a browser). Though usually this is what you want but there are many use cases where you might want to persist your redux state even when you reload your browser window.

This idea of persisting state across refresh in web applications that use redux for global state management can be achieved using the [redux-persist](https://www.npmjs.com/package/redux-persist) npm package.

The complete redux-store or some specific part of it can be persisted in the browser **_localstorage_** easily!

A very common use case for implementing redux-persist in 2020 is:

> **Offline First.** Many users may not have stable internet connection. Persistence is the first step of offline support.

Okay so that's it for the introduction, now let's set up redux-persist in our react-redux application.

_Check [this](https://medium.com/coox-tech/how-to-setup-redux-with-react-2020-adb8cad90234) out for setting up a react-redux app_
_or clone this [repo](https://github.com/bhatvikrant/react-redux-boilerplate)_

---

## Step 1 - Install redux-persist

```bash
npm install redux-persist
```

or

```bash
yarn add redux-persist
```

## Step 2 - Configure redux-store

```javascript
// store.js

import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist" // imports from redux-persist
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

import rootReducer from "./reducers" // Root reducer

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
  persistReducer, // pass the persisted reducer instead of rootReducer to createStore
  applyMiddleware() // add any middlewares here
)

const persistor = persistStore(store) // used to create the persisted store, persistor will be used in the next step

export { store, persistor }
```

The _persistConfig_ object needs **key** and **storage** to work properly since they are mandatory, but it can also take some other key value pairs for more customization, some of them are:

1.  **blacklist:**

```javascript
// BLACKLIST
example: const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["navigation"], // navigation will not be persisted
}
```

2. **whitelist:**

```javascript
// WHITELIST
example: const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["navigation"], // only navigation will be persisted
}
```

<br />

> **Note**: if you are using react native then your _persistConfig_ will look like this ([see docs](https://github.com/rt2zz/redux-persist#v6-upgrade)):
>
> ```javascript
> import AsyncStorage from "@react-native-community/async-storage"
>
> const persistConfig = {
>   key: "root",
>   storage: AsyncStorage,
> }
> ```

## Step 3 - Wrap your root component with [PersistGate](https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md)

If you are using react, wrap your root component (Top level component) with PersistGate. This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.

> **NOTE** the `PersistGate`'s loading prop can alse be null, or any react instance, e.g. `loading={<Loading />}`
> i.e it can be any react component, so you can add your custom loader as a component here.
> If null is provided as a value then it simply loads nothing until persisted state is retrieved. (Don't worry if you don't have a custom loader yet, it hardly takes fraction of a second to retrieve a simple redux state)

```javascript
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        // null passed to loading, persistor is being used here
        <RootComponent />
      </PersistGate>
    </Provider>
  )
}
```

<br />
Congratulations! You have successfully completed the setup of redux-persist in your react-app! It was fairly easy wasn't it? Let me know your thoughts on [twitter](https://twitter.com/vikrantbhat1022)

---

### Additional resources

> 1. Check out [this](https://www.freecodecamp.org/news/how-to-use-redux-persist-when-migrating-your-states-a5dee16b5ead/) great article to know how you can do versioning in your persisted localstorage using redux-persist. This usually comes in handy when you make some big changes in your redux state and its not compatible with the previously saved localstorage in production, so redux-persist has this good to have feature for versioning built in.
>    <br /> > ![enter image description here](https://cdn-media-1.freecodecamp.org/images/0rJmD7xq6mgOnUokqih4WTMy2F6Kd3GmgalV)
>
> 2. [Docs](https://github.com/rt2zz/redux-persist#readme)
> 3. [API](https://github.com/rt2zz/redux-persist#api)
> 4. [How to setup Redux with React (2020)](https://medium.com/coox-tech/how-to-setup-redux-with-react-2020-adb8cad90234)
