//render the list of libaries to the user
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

//sækja gögn í state og birta með redux
class LibraryList extends Component {
  componentWillMount() {
    //Gögnin sem á að birta í listviewinu
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  //Segir hvernig á að rendera eina row i listanum og
  //hvaða raðir á að lista upp fyrir hvert library
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//Takes the global state object (state) and provides them as props to the compontes.
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
