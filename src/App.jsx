// functional component in React
// function App() {
//     return <h1>Hello, World!</h1>
// }


// functional component using function expression
// const App = function () {
//     return <h1>Hello, World!</h1>
// }

// functional component using arrow function
// const App = () => <h1>Hello, World!</h1>;

// functional component using arrow function
// multiple components using functional components
const Hello = () => {
    return <h1>Hello, World!</h1>;
}

const App = () => {
    return <Hello />;
}

// class component in React

/*
    React -> namespace from 'react' library or module or package
    namespace -> a way to group related code together
    React.Component -> base class for creating class components

    the class App is extending React.Component, which means it inherits all the properties and methods of React.Component.

    render() -> method that returns the JSX to be rendered
    This render method is called to override the default render method of React.Component.

    Method Overriding -> a way to change the behavior of a method in a subclass to execute it over the method in the parent class.
*/

// import React from "react";
// class App extends React.Component {
//     render() {
//         return <h1>Hello, World!</h1>;
//     }
// }

export default App;