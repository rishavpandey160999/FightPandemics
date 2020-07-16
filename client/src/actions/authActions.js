import axios from "axios";
import { checkRememberCookie, clearRememberCookie } from "utils/cookie";
import {
  AUTH_ERROR,
  AUTH_LOGOUT,
  SET_AUTH_LOADING,
  SET_USER,
} from "constants/action-types";

const GET_CURRENT_USER_ENDPOINT = "/api/users/current";

// Token stored in httpOnly cookie set/cleared by server
export const initAuth = () => {
  return async (dispatch) => {
    if (!checkRememberCookie()) return;

    dispatch({ type: SET_AUTH_LOADING, payload: true });
    try {
      const { data: user } = await axios.get(GET_CURRENT_USER_ENDPOINT);
      dispatch({ type: SET_USER, payload: { user } });
    } catch (error) {
      dispatch({ error, type: AUTH_ERROR });
    } finally {
      dispatch({ type: SET_AUTH_LOADING, payload: false });
    }
  };
};

export const refetchUser = () => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(GET_CURRENT_USER_ENDPOINT);
      dispatch({ type: SET_USER, payload: { user } });
    } catch (error) {
      dispatch({ error, type: AUTH_ERROR });
    }
  };
};

export const authLogout = () => {
  return async (dispatch) => {
    clearRememberCookie();
    // also clear httpOnly cookie w jwt token (if online)
    try {
      await axios.get(GET_CURRENT_USER_ENDPOINT);
    } catch {}
    dispatch({ type: AUTH_LOGOUT });
  };
};
