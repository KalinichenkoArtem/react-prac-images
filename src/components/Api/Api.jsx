import { Component } from 'react';
import getImages from '../../services/getImages';

class Api extends Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('this.props :>>', this.props);
    if (prevProps.searchText !== this.props.searchText) {
      getImages(this.props.searchText);
    }
  }

  render() {
    return <></>;
  }
}

export default Api;
