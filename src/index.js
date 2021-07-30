import {StrictMode} from "react";
import ReactDOM from "react-dom";

import App from "./App";

const {worker} = require('./mocks/browser')
worker.start()

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    rootElement
);
