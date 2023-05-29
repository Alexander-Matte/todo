import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via import
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());