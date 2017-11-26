import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  componentWillMount() {
    this.fetchTweets();
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  componentDidMount() {
    this.startInterval();
  }

  cleanUpInterval = () => {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    this.cleanUpInterval();
  }
}

export default App;
