import React from "react";
import ReactDOM from "react-dom";

const MyHeader = React.createElement(
    'h1',
    { className: 'header-title'},
    'Hello from my custom header'
)
const rootElement = document.getElementById('content')


ReactDOM.render(MyHeader, rootElement)