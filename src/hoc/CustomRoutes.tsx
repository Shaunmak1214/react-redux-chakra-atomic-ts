import React, { useEffect } from 'react';
import { API_URL } from '../constants';
import axios from 'axios';
import store from '../store';
import { useDispatch } from 'react-redux';
import { LOGOUT, LOGIN } from '../reducers/authSlice';
import ReactGA from 'react-ga';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Comp from '../components/organisms';
interface Props {
  header?: boolean;
  component: any;
  children?: any;
  isProtected?: boolean;
  footer?: boolean;
  clearForm?: boolean;
  searchBar?: boolean;
  protectLevel?: number;
  marginTop?: boolean;
}

const CustomRoute = ({
  header,
  footer = true,
  isProtected = false,
  searchBar = false,
  component: Component,
  marginTop = false,
  ...rest
}: Props) => {
  const authState = store.getState().auth;
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const logout = () => {
    dispatch(LOGOUT());
  };
  const refreshTokenExchange = () => {
    axios
      .post(`${API_URL}/auth/refresh`, {
        refreshToken: authState.refreshToken,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 203 || res.status === 204) {
          dispatch(
            LOGIN({
              user: res.data.user,
              accessToken: res.data.access_token,
              refreshToken: res.data.refresh_token,
            }),
          );
          window.location.reload();
        } else {
          logout();
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        logout();
      });
  };

  useEffect(() => {
    // Google Analytics
    ReactGA.pageview(window.location.pathname + window.location.search);
    axios
      .get(`${API_URL}/auth`, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 203 || res.status === 204) {
          return;
        } else {
          logout();
        }
      })

      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        refreshTokenExchange();
      });
  });

  if (isProtected && !authState.isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        {header && <Comp.Header />}
        <Component {...rest} />
        {footer && <Comp.Footer marginTop={marginTop} />}
      </>
    );
  }
};

CustomRoute.propTypes = {
  header: PropTypes.bool,
  location: PropTypes.object,
  children: PropTypes.node,
  exact: PropTypes.bool,
  path: PropTypes.string,
  isProtected: PropTypes.bool,
};

export default CustomRoute;
