import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import 'src/styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    data: '',
  };

  handleNameChange = event => {
    this.setState({ data: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.data.trim() === '') {
      return toast('Заповніть поле пошуку');
    }

    this.props.onSubmit(this.state.data);
    this.setState({ data: '' });
    event.currentTarget.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleNameChange}
            value={this.state.data}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
