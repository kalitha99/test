import React, { Component } from 'react';
import Background from '../videos/Background.MP4';

export default class video extends Component {
  render() {
    return (
        <div className="text-center">


            <video autoPlay loop muted id='video'>
                <source src={Background } type='video/mp4' />
            </video>
      </div>
    )
  }
}
