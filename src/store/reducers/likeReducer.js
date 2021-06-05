const initState = {
    like: 0
}

const likeReducer = (state = initState,action) => {
    switch (action.type) {
      case 'LIKE_SUCCESS':
        console.log('like success');
        return state;
      case 'LIKE_ERROR':
        console.log('like error');
        return state;
      default:
        return state;
    }
  };
  
  export default likeReducer;