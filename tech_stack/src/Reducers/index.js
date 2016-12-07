import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//nota combine reducers til að láta alla reducerana leika fallega saman
//T.d. hér er listi af libraries sem á að birta, tvö state til að halda utan um
//valið library sem á að expanda og svo lista af libraries.
//console.log(store.getState()); skilar {libraries: []} því LibraryReducer skilar tómu []
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
