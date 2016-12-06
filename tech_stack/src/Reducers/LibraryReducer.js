import data from './LibraryList.json';

//alltaf þegar kallað er í LibraryReducer þá skilast þessi gögn
// getState skilar þá { libraries: [{ id: 0, title: Zelda...}]}
export default () => data;
