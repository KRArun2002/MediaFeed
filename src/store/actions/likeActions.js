export const increaseLike = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      console.log('hello', project.project.like+1);
      firestore.collection('projects').doc(project.project.authorId).update({
        // like: project.project.like+1,
        content: 'hello'
      }).then(() => {
        dispatch({ type: 'LIKE_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'LIKE_ERROR' }, err);
      });
    }
  };