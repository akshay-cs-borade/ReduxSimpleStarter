import React from 'react';
import ReactDOM from 'react-dom';
// Create a component. This component should reproduce some HTML
// const App = function () { } ===ES6===> const App = () => { }
const App = () => {
  return <div>Hi!</div>;
}

// App ===> This is a class not an instance. This class/type of a component.

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
// <App /> we created a instance of a class App. By writing it into the jsx syntax.
// It will return like this React.createElement(App, null);
