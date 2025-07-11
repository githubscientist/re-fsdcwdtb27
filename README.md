### React Router

Data Passing as Props in React Router:

We cannot pass props directly to components rendered by React Router.

Instead we can pass data in following ways:

1. using loader
2. using Context API
3. using Outlet
4. URL Params or Query Params

Browser Storage:

- Local Storage
  - Data persists even after the browser is closed.
  - Data is stored as key-value pairs.
  - The value can be of either string or JSON format.
  - Data is limited to 5-10 MB depending on the browser.
- Session Storage
  - Data persists only for the duration of the page session.
  - Data is stored as key-value pairs.
  - The value can be of either string or JSON format.
  - Data is limited to 5-10 MB depending on the browser.
- Cookies
  - Data can be set to expire after a certain time.
  - Data is stored as key-value pairs.
  - The value can be of either string or JSON format.
  - Data is limited to 4 KB per cookie.
- httpOnly Cookies
  - Data is not accessible via JavaScript, enhancing security.
