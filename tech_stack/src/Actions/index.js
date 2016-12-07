//action creator sem skilar action
//Wrappar typeið á actioninu með falli
//þarf að abstracta gögnin sem actionið á að vinna með
//með þvi að taka það inn sem property í fallinu (libraryId)
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
