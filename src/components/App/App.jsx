import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import getImages from 'components/getImages';
import { AppContainer } from 'components/App/App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    data: '',
    images: [],
    page: 1,
    isEmpty: false,
    showBtn: false,
    isLoading: false,
    isError: null,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { data, page } = this.state;
    if (data !== prevState.data || page !== prevState.page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await getImages(data, page);
        console.log(hits);
        if (!hits?.length) {
          this.setState({ isEmpty: true });
          return;
        }
        this.setState(prevState => ({
          images: prevState.images.concat(hits),
          showBtn: page < Math.ceil(totalHits / 12),
        }));
      } catch {
        // this.setState({ isError: errorMessages.noImages });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = data => {
    this.setState({ data, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isEmpty, data, showBtn, isLoading } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {showBtn && <Button onClick={this.onLoadMore} />}
        {isEmpty && (
          <h2>
            There are no pictures with the name {data} in our database, try
            another request!
          </h2>
        )}
        <ToastContainer autoCloseClose={3000} />
      </AppContainer>
    );
  }
}
