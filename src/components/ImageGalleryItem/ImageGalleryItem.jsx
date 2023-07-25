import React, { Component } from 'react';
import { ItemContainer, ImageGallery } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { id, webformatURL, tags, largeImageURL } = this.props;

    return (
      <>
        <ItemContainer key={id} onClick={this.toggleModal}>
          <ImageGallery src={webformatURL} alt={tags} />
        </ItemContainer>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
