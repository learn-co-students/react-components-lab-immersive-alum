import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = ['Tenderloin', 'Short ribs', 'Beef shin', 'Ribeye'];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    const title = React.createElement(
      'p',
      {},
      'Two grannies having the time of their life!'
    );

    const sub = React.createElement('p', {}, 'Passengers:');

    const list = React.createElement('ul', {}, [
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel')
    ]);

    return React.createElement('div', { className: 'oldercoaster' }, [
      title,
      sub,
      list
    ]);
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    const far = React.createElement('p', {}, "You shouldn't look too far.");

    const some = React.createElement(
      'p',
      {},
      'Sometimes, the solution is right in front of you.'
    );
    return React.createElement('div', {}, [far, some]);
  }
}

export class ButcherShop extends React.Component {
  render() {
    const hello = React.createElement(
      'p',
      {},
      'Hello! We have the following products for sale today:'
    );
    const list = React.createElement('ul', {}, [
      React.createElement('li', {}, 'Tenderloin'),
      React.createElement('li', {}, 'Short ribs'),
      React.createElement('li', {}, 'Beef shin'),
      React.createElement('li', {}, 'Ribeye')
    ]);
    return React.createElement('div', { className: 'butcher-shop' }, [
      hello,
      list
    ]);
  }
}

ReactDOM.render(
  <div>
    render your components here! Refer back to the previous README if you are
    lost
  </div>,
  document.getElementById('root')
);
