import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchContainer,
  SearchForm,
  FormButton,
  FormInput,
} from 'components/Searchbar/Searchbar.styled';
import { ImSearch } from 'react-icons/im';

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

    event.currentTarget.reset();
  };

  render() {
    return (
      <SearchContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <ImSearch style={{ width: 25, height: 25 }} />
          </FormButton>

          <FormInput
            onChange={this.handleNameChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchContainer>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
