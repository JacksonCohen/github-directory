import { useDispatch, useSelector } from 'react-redux';
import * as types from '../actions/actionTypes';
import { AppState } from '../store';
import User from '../interfaces/User.interface';

export const useUserList = (username: string): Promise<any> => {
  const dispatch = useDispatch();
  const userList = useSelector((state: AppState) => state.user);

  return fetch(`https://api.github.com/users/${username}/followers`)
    .then(res => res.json())
    .then(json => {
      return {
        userList,
        setUserList: dispatch({ type: types.UPDATE_USER_LIST, users: json })
      };
    });
};

export const useModal = (): {
  isModalShowing: boolean;
  showModal: Function;
  hideModal: Function;
} => {
  const dispatch = useDispatch();
  const { isModalShowing } = useSelector((state: AppState) => state.modal);

  return {
    isModalShowing,
    showModal: () => dispatch({ type: types.SHOW_USER_MODAL }),
    hideModal: () => dispatch({ type: types.HIDE_USER_MODAL })
  };
};
