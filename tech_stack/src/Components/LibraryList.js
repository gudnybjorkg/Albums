//render the list of libaries to the user
import React, { Component } from 'react';
import { connect } from 'react-redux';

//sækja gögn í state og birta með redux
class LibraryList extends Component {
  render() {
    return;
  }
}

//Nota connect()(): kallar í connect þá skilar það öðru falli í þessu tilfelli með LibraryList
export default connect()(LibraryList);
