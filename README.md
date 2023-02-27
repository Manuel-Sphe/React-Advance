# React-Advance
- Here I Demonstrate how to use React Statement Libraries

`useContext`, `useReducer`, `Redux`, and `Zustand` are state management libraries that are commonly used in React applications.

`useContext` is a built-in React hook that provides a way to pass data through the component tree without having to pass props down manually at every level. By creating a context with createContext and using the useContext hook, you can consume the data that was provided at a higher level in the component tree. useContext is often used for simpler state management, where the amount of state is small and doesn't require a more complex solution.

`useReducer` is another built-in React hook that provides a way to handle more complex state management scenarios. It allows you to manage state through a reducer function, similar to how state is managed in Redux. useReducer can be used to handle more complex state transitions and can be a good choice for applications that don't require the full power of Redux.

`Redux` is a popular state management library for React that provides a centralized store for your application's state. Redux follows a unidirectional data flow pattern, where actions are dispatched to modify the state, and changes to the state trigger a re-render of the application. It can be a good choice for large, complex applications where state management becomes difficult to handle with only useContext or useReducer.

`Zustand` is a relatively new state management library for React that provides a lightweight solution for managing complex state. It uses a hook-based approach and leverages the power of React hooks to provide a more ergonomic API for state management. Zustand is similar to Redux, but with a simpler API and a smaller footprint. It can be a good choice for applications that require more complex state management than useContext or useReducer, but don't require the full power of Redux.

In summary, `useContext` and `useReducer` are built-in `React` hooks that can be used for simpler state management scenarios. Redux is a popular library for more complex state management scenarios, while `Zustand` is a newer, lightweight library that provides a simpler API than Redux while still providing a powerful state management solution. The choice between these libraries ultimately depends on the specific needs of your application.

## Clone the repository

- Clone the repository using Git by running the following command in your terminal:

```bash
git clone https://github.com/Manuel-Sphe/React-Advance.git

## Install Dependencies
- Navigate to one of the Folders(Redux, useContex, etc..) and install the required dependencies by running the following command:

```
```bash
cd Redux
yarn install
```
## Run the Application
To run the application in development mode, run the following command:
```bash
yarn start
```


This will start the development server and open the application in your default browser.

## Build the Application

To build the application for production, run the following command:
```bash
yarn build
```
This will create an optimized build of the application in the `build` directory.
### Windows

To run the above commands on Windows, you can use the Command Prompt or PowerShell.

### Linux and macOS

To run the above commands on Linux or macOS, you can use the terminal.

