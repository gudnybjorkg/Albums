//render the list of libaries to the user
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

//sækja gögn í state og birta með redux
class LibraryList extends Component {
  componentWillMount() {
    //Gögnin sem á að birta í listviewinu
    const ds = new ListView.dataSource({
      //?
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //datasource for the listview
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  //Segir hvernig á að rendera eina row i listanum
  renderRow() {

  }

  render() {
    //console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//Takes the global state object (state) og mappar það (tekur property í stateinu)
//provides them as props to the compontes.
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//Nota connect()(): kallar í connect þá skilar það öðru falli í þessu tilfelli
//með LibraryList sem argument
export default connect(mapStateToProps)(LibraryList);
