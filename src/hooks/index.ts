import { useDispatch, useSelector } from 'react-redux';
import * as types from '../actions/actionTypes';
import { AppState } from '../store';

export const useUserList = (username: string): any => {
  const dispatch = useDispatch();
  const userList = useSelector((state: AppState) => state.user);
  // const criteria = useSelector((state: AppState) => state.criteria)

  return {
    userList
    // setUserList: dispatch({ type: types.UPDATE_USER_LIST, users })
  };
};

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
    setUserModal: (login: string, avatar_url: string, bio: string) =>
      dispatch({ type: types.SET_CURRENT_USER_VIEW, login, avatar_url, bio })
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

export const useAuthenticatedUserData = () => {
  const dispatch = useDispatch();
  const { login, avatar_url, bio } = useSelector((state: AppState) => state.user);

  return {
    setAuthenticatedUserData: dispatch
  };
};

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
