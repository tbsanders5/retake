import React from "react";
import Alert from "./components/Alert";

const alertType = 'danger';

function App() {
  return <Alert type={alertType}>Invalid user id or password</Alert>;
}

// function App() {
//   return <div>Hello!</div>
// }

export default App;
