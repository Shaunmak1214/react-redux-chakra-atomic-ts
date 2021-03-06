import { useState } from 'react';
import { API_URL } from '../constants/';
import PropTypes from 'prop-types';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
type onUpdate = (err: object | null | any, res: any | null) => any;

axios.defaults.baseURL = API_URL;
const useAxios = (axiosParams: object, onUpdate: onUpdate) => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = (data?: object | null) => {
    setLoading(true);
    axios
      .request({
        ...axiosParams,
        data: data ? data : null,
      })
      .then((res: any) => {
        if (res.status === 200 || res.status === 201 || res.status === 203) {
          onUpdate(null, res);
        } else {
          onUpdate(res, null);
        }
      })

      .catch((err: any) => {
        //check wat backend returns first
        onUpdate(err.response, null);
      })

      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, fetch: fetchData };
};

useAxios.propTypes = {
  axiosParams: PropTypes.object.isRequired,
  onUpdate: PropTypes.func,
};

export default useAxios;
