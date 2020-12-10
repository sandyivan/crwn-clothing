import { UserActionTypes } from './user.types';

// this function takes one parameter, a user object it can be the userAuth or our user snaphot object the we create inside of firebase.utils.js or its null.
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

// so we have this action that our components will leverage in order to update our reducer with approprioate values