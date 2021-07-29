// import "./styles.css";
import "@linzjs/lui/dist/scss/base.scss";
import { Header } from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Hello, I'm a paragraph</p>
      <br />
      <button className="lui-button lui-button-secondary">Button</button>
    </div>
  );
}
