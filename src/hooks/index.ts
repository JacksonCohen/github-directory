import { useDispatch, useSelector } from 'react-redux';
import * as types from '../actions/actionTypes';
import { AppState } from '../store';
import { User } from '../interfaces/SetUser.interface';

export const useUserList = (username: string): any => {
  const dispatch = useDispatch();
  const userList = useSelector((state: AppState) => state.user);

  return fetch(`https://api.github.com/users/${username}/followers`)
    .then(res => res.json())
    .then(users => {
      return {
        userList,
        setUserList: dispatch({ type: types.UPDATE_USER_LIST, users })
      };
    });
};

// export const useUserModal = () => {
//   const dispatch = useDispatch();
//   const { setCurrentUserView } = useSelector((state: AppState) => state.user);

//   return {
//     setCurrentUserView
//   };
// };

// get authenticated user
// export const useAuthenticatedUser = (): {
//   isAuthenticated: boolean;
//   markUserAuthenticated: Function;
// } => {
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state: AppState) => state.isAuthenticated);

//   return {
//     isAuthenticated,
//     markUserAuthenticated: () => dispatch({ type: types.MARK_USER_AUTHENTICATED })
//   };
// };

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
