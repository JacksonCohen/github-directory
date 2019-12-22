import { useDispatch, useSelector } from 'react-redux';
import * as types from '../actions/actionTypes';
import { AppState } from '../store';

// update the users based on the criteria selected
export const useUserList = (username: string): any => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.user);

  return {
    users,
    setUserList: (criteria: string) => dispatch({ type: types.UPDATE_USER_LIST, users, criteria })
  };
};

// update the criteria for which users are being displayed
export const useSearchCriteria = (): {
  criteria: string;
  updateSearchCriteria: any;
} => {
  const dispatch = useDispatch();
  const criteria = useSelector((state: AppState) => state.searchCriteria.criteria);

  return {
    criteria,
    updateSearchCriteria: (target: string) =>
      dispatch({ type: types.UPDATE_SEARCH_CRITERIA, criteria: target })
  };
};

// update the modal info based on the user that has been clicked
export const useUserModal = (): {
  login: string;
  avatar_url: string;
  bio: string;
  setUserModal: Function;
} => {
  const dispatch = useDispatch();
  const userState = useSelector((state: AppState) => state.user);
  const { login, avatar_url } = userState;
  // bio is an optional field
  const bio = userState.bio || '';

  return {
    login,
    avatar_url,
    bio,
    setUserModal: (login: string, avatar_url: string, bio: string) => {
      dispatch({ type: types.SET_CURRENT_USER_VIEW, login, avatar_url, bio });
      console.log(login, avatar_url, bio);
    }
  };
};

// get authenticated user
export const useAuthenticatedUser = (): {
  isAuthenticated: boolean;
  markUserAuthenticated: Function;
} => {
  const dispatch = useDispatch();
  const userState = useSelector((state: AppState) => state.user);
  // isAuthenticated is an optional field
  const isAuthenticated = userState.isAuthenticated || false;

  return {
    isAuthenticated,
    markUserAuthenticated: () => dispatch({ type: types.MARK_USER_AUTHENTICATED })
  };
};

// add authenticated user info to rest of users in directory
export const useAuthenticatedUserInfo = () => {
  const dispatch = useDispatch();
  const { login, avatar_url, bio } = useSelector((state: AppState) => state.user);

  return {
    login,
    avatar_url,
    bio,
    setAuthenticatedUserInfo: () => dispatch({ type: types.SET_AUTHENTICATED_USER_INFO })
  };
};

// toggle the modal
export const useModal = (): {
  isModalShowing: boolean;
  showUserModal: Function;
  hideUserModal: Function;
} => {
  const dispatch = useDispatch();
  const { isModalShowing } = useSelector((state: AppState) => state.modal);

  return {
    isModalShowing,
    showUserModal: () => dispatch({ type: types.SHOW_USER_MODAL }),
    hideUserModal: () => dispatch({ type: types.HIDE_USER_MODAL })
  };
};
