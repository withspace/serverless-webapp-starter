const React = require('react');
const ReactDOM = require('react-dom');

const HelloReactJS = React.createClass({
  render: function(){
    return (
      <div>
      Hello React.js
    </div>
    )
  }
});
ReactDOM.render(<HelloReactJS />, document.getElementById('app'));