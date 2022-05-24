import { useAxios } from '../hooks';

const useAdminLogin = (cb: any) => {
  const { loading, fetch } = useAxios(
    {
      url: `/auth/login`,
      method: 'POST',
    },
    (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        if (res.status === 200 || res.status === 203 || res.status === 204) {
          cb(null, res);
        } else {
          cb(err, null);
        }
      }
    },
  );

  return { loading, fetch };
};

export { useAdminLogin };
