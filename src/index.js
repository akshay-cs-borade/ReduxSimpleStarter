// To import defind var from different modules
import React from 'react';

// to import a component into the Dom, we don't use react library.
// We use ReactDOM library
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyASaxrv0Bu1VmRKoO4lZq7SkCCkYqynf5s';
// Create a component. This component should reproduce some HTML
// const App = function () { } ===ES6===> const App = () => { }
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// App ===> This is a class not an instance.
// This class/type of a component.

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
// <App /> we created a instance of a class App.
// By writing it into the jsx syntax.
// It will return like this React.createElement(App, null);

// ReactDOM.render(your_react_instance, target_container);
