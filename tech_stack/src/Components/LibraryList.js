//render the list of libaries to the user
import React, { Component } from 'react';
import { connect } from 'react-redux';

//sækja gögn í state og birta með redux
class LibraryList extends Component {
  render() {
    return;
  }
}

//Takes the global state object (state) og mappar það (tekur property í stateinu)
//provides them as props to the compontes.
const mapStateToProps = state => {
  console.log(state);
};

//Nota connect()(): kallar í connect þá skilar það öðru falli í þessu tilfelli
//með LibraryList sem argument
export default connect(mapStateToProps)(LibraryList);
