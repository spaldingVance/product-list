import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from './search-bar';
import Categories from './categories';
import SortBy from './sortBy';

import { fetchProducts } from '../actions/index';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '', category: '', sortBy: '' };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <SearchBar />
        </div>
        <div className="col-md-4">
          <Categories />
        </div>
        <div className="col-md-4">
          <SortBy />
        </div>



      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchProducts }, dispatch);
// }

// function mapStateToProps(state) {
//   return {
//     term: state.term,
//     category: state.category,
//     sortBy: state.sortBy
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NavBar);
