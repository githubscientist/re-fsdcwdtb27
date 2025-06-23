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

[ ] class, constructor, object
[ ] call
[ ] bind
[ ] apply
