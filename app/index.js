import React from 'react';
import ReactDOM from 'react-dom';

class HelloReactJS extends React.Component {
  render() {
    return <div>Serverless WebApp Starter</div>;
  }
}

ReactDOM.render(<HelloReactJS />, document.getElementById('app'));