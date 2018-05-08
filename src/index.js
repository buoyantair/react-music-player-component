import React, { Component } from 'react';
import styled from 'styled-components';

import playButton from './ios-play-outline.svg';
import skipForward from './ios-skipforward-outline.svg';
import skipBackward from './ios-skipbackward-outline.svg';

class MusicPlayer extends Component {
  state = {
    isOpen: false,
  }

  onEnter = () => {
    this.setState({ isOpen: true })
  }

  onLeave = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { className } = this.props;
    const { isOpen } = this.state;
    return (
      <div
        className={className}
      >
        <div
          className="p-holder"
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
        >
          <div
            className="p-img"
            style={{
              height: isOpen ? '70%' : '100%',             
            }}
          >
            <div className="p-data">
              <h1> Now Playing </h1>
              <p>The Chainsmokers : Don't let me down</p>
            </div>
          </div>
          <div className="player">
            <div className="p-control" dangerouslySetInnerHTML={{ __html: skipBackward }} />
            <div className="p-control" dangerouslySetInnerHTML={{ __html: playButton }} />
            <div className="p-control" dangerouslySetInnerHTML={{ __html: skipForward }} />
          </div>
        </div>
      </div>
    );
  }
}

export default styled(MusicPlayer)`
  .p-holder{
    height: 300px;
    width: 250px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    margin: auto;
    background: #FFF;
    border-radius: 5px;
    overflow: hidden;
    transition: all .5s;
  }

  .p-holder:hover{
    box-shadow: 0px 10px 10px 1px #254663;
  }

  .p-img{
    background: url('https://a-v2.sndcdn.com/assets/images/home/hp_image-5ab805.jpg') no-repeat;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-position: 0% 0%;
    animation: bg-img 30s infinite;
    transition: all .7s;
  }

  .p-img .p-data{
    color: #FFF;
    transition: all .5s;
    padding: 10px;
  }

  .p-data h1, .p-data p{
    text-align: left;
  }


  @keyframes bg-img{
    0%{background-position: 0% 0%}
    36%{background-position: 25% 30%}
    50%{background-position: 75% 80%}
    70%{background-position: 55% 6%}
    100%{background-position: 0% 0%}
  }

  .player{
    padding: 1em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    font-size: 25px;
  }
  .player .p-control{
    transition: all .2s;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .player .p-control:hover{
    transform: scale(1.1);
    cursor: pointer;
    text-shadow: 0px 0px 30px #000;
  }

`;
