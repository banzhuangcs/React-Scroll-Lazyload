import React, { Component } from 'react';
import { render } from 'react-dom';
import Lazyload from './Lazyload';

const paths = [
  'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg',
  'http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg',
  'http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif',
  'http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg'
];

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        {
          [762, 683, 480, 720].map((value, index) => (
            <Lazyload
              key={index}
              nodeName="div"
              width="100%"
              height={value}>
              <img src={paths[index]} />
            </Lazyload>
          ))
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('wrap'));
