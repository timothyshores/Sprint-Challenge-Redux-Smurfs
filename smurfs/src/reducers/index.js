/*
  Be sure to import in all of the action types from `../actions`
*/

import {
    GET_SMURFS,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_ERROR,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERROR,
    DELETE_SMURF,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_ERROR,
} from '../actions/index';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                gettingSmurfs: true,
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                gettingSmurfs: false,
                smurfs: [...state, ...action.payload],
            }
        case GET_SMURFS_ERROR:
            return {
                ...state,
                gettingSmurfs: false,
            }
        case ADD_SMURF:
            return {
                ...state,
                addingSmurf: true,
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurf: false,
                smurfs: [...action.payload],
            }
        case ADD_SMURF_ERROR:
            return {
                ...state,
                addingSmurf: false,
            }
        case DELETE_SMURF:
            return {
                ...state,
                deletingSmurf: true,
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                deletingSmurf: false,
                smurfs: action.payload,
            }
        case DELETE_SMURF_ERROR:
            return {
                ...state,
                deletingSmurf: false,
            }
        default:
            return state
    }
};