Q1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.prototype.concat 
Array.prototype.filter
Spread Operator - use this to create a new object while extending the property of another object

Q2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are  plain JavaScript objects that describe what happened. They deliver payloads of information that send data from your application to your store.  

Reducers are pure functions without any side effects that take in a state and an action, and return a new state. Reducers specify how the application's state changes in response to actions sent to the store.

The store is an object that holds the whole state tree of your application. The store is known as a single source of truth because the entire state of an application is stored in the store. Also the store is read-only and can only be changed via reducers which are triggered through an action.

Q3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state for the entire application. Component state is a local state for a given component.

Application state should be used when state is important for the rest of the application and will affect other parts of the application. An example of using application state might be updating an avatar photo where it displays in multiple places. Component can be used when the state only affects that specific component and will not affect another part of the application. An example of this might be to change the color of a button after a user clicks on it. 

Q4.  What is middleware?

Middleware is code between the framework receiving a request and the framework generating a response

Q5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. Thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

Q6.  Which `react-redux` method links up our `components` with our `redux store`?

getState()