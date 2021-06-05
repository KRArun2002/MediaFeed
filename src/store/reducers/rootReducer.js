import authReducer from './authReducer'
import projectReducer from './projectReducer'
import  likeReducer  from './likeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  like:likeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,

});

export default rootReducer