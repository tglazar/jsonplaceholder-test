import React, {Component} from 'react';
import Page from './pages/Page';

export default class App extends Component {
  state = {
    page: '/list',
    postId: 0
  };

  changeViewHandler = (page, postId = 0) => {
    this.setState({
      page: page,
      postId: postId,
    });
  };

  render() {
    return (
        <Page name={this.state.page}
              changePageTo={this.changeViewHandler}
              id={this.state.postId}
        />
    )
  };
}
