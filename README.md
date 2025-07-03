- To install all the dependencies, run:

```bash
npm install
```

- To install a specific package, run:

```bash
npm install <package-name>
```

- To uninstall a package, run:

```bash
npm uninstall <package-name>
```

- To install a package in development mode, run:

```bash
npm install -D <package-name>
```

Component:

- A reusable piece of UI.
- components can be created either as functional components or class components.
- Components are aliased as custom HTML elements as they contains either a single html element or a group of html elements.

JSX:

- JSX means JavaScript + XML.
- JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

Passing Data from Parent to Child:

- Data can be passed from a parent component to a child component using props.

Passing Data from Child to Parent:

- Data can be passed from a child component to a parent component using callback functions.
- The parent component can pass a function as a prop to the child component, and the child component can call that function with the data it wants to send back to the parent.

Props Drilling:

- Props drilling is the process of passing data from a parent component to a deeply nested child component through multiple layers of components.

Drawbacks of Props Drilling:

- It can make the code harder to read and maintain, especially if there are many layers of components.
- It can lead to performance issues if the components are re-rendered unnecessarily.
- It can make it difficult to share data between components that are not directly related.
- It makes the in between components to use the props that they don't need.

Solution to Props Drilling:

- Use Context API.

Pending Topics:

[x] class, constructor, object
[ ] call
[ ] bind
[ ] apply
[ ] Children Props
[ ] Higher Order Components (HOC)
[ ] Conditional Rendering

### React Hooks

- We have in React, class components and functional components.
- Class components: stateful components
- Functional components: stateless components
- Class components can have lifecycle methods, while functional components cannot.

- Though functional components are efficient and simple, as they are stateless and does not have lifecycle methods, they are not adopted initially.
- React Hooks were introduced to allow functional components to have state and lifecycle methods.
- React Hooks are special functions that allow you to use state and other React features in functional components.
- React Hooks are used to manage state using the `useState` hook, and to manage side effects using the `useEffect` hook.
- class components are complex and have a lot of boilerplate code, while functional components are simple and easy to read.

state:

- State is a built-in object that stores data about the component.

To Remove Tailwind CSS@3:

- Remove the `tailwindcss` package from your project by running:

```bash
npm uninstall tailwindcss
```

- Remove the `tailwind.config.js`, `postcss.config.js`, and index.css files from your project.

```bash
rm -rf tailwind.config.js postcss.config.js ./src/index.css
```

- Remove the node_modules folder and reinstall the dependencies:

```bash
rm -rf node_modules
npm install
```

useRef():

- `useRef` is a React Hook that allows you to create a mutable reference that persists for the lifetime of the component.
- It can be used to access DOM elements or to store mutable values that do not cause re-renders when changed.

useReducer():

- `useReducer` is a React Hook that allows you to manage state in a functional component using a reducer function.

useMemo:

- `useMemo` is a React Hook that allows you to memoize a value, preventing unnecessary recalculations on re-renders.

useCallback:

- `useCallback` is a React Hook that allows you to memoize a function, preventing unnecessary re-creations on re-renders.

### React Router

- React Applications are single-page applications (SPAs).
- Which means that the entire application is loaded on a single HTML page, and the content is dynamically updated without reloading the page.
- React Router is a library that allows you to create a single-page application with multiple views.
- It allows you to define routes in your application, and to navigate between different views without reloading the page.
- Also, it allows the browser to maintain the history of the application, so that the user can navigate back and forth between different views.

#### Children Props:

- Children props are a special type of prop that allows you to pass child elements to a component.

API Request:

- Initially we have used XHR (XMLHttpRequest) to make API requests.
- Then we have used Fetch API to make API requests.
- Fetch API is a modern way to make API requests in JavaScript.
- We have a separate library called Axios to make API requests.

### React Router Loaders

- Loaders are functions that run before a route is rendered.
