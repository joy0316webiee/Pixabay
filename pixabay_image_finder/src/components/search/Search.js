import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

class Search extends Component {
  state ={
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '11644212-612f319ad40b0df82d5835e8d',
    images: []
  };

  onTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    });
  }

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField 
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <SelectField
          name="amount"
          floatingLabelText="Frequency"
          value={this.state.amount}
          onChange={this.handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>Weekly</MenuItem>          
        </SelectField>
        <br/>
      </div>
    )
  }
}

export default Search;