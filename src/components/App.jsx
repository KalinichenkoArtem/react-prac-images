import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Api from './Api/Api';
// import Loader from 'components/Loader/Loader';
// import 'src/styles.css';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    data: '',
    images: [],
    page: 1,
    // isLoading: false,
  };

  handleFormSubmit = data => {
    this.setState({ data });
  };

  handleSearch = data => {
    this.setState({ data });
  };

  render() {
    // const { isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Api searchText={this.state.data} />
        {/* {isLoading && <Loader />} */}
        <ToastContainer autoCloseClose={3000} />
      </>
    );
  }
}
