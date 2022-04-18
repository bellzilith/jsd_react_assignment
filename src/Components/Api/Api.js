import Axios from 'axios' ;

export const client = Axios.create({
  baseURL: 'http://localhost:4000',

  validateStatus: (status) => {
      return status >= 200 && status <300;
  },
});

export const getRecords = async () => {
    const response = await client.get('/users/me/records');
    return response;
}

// TODO: current edit
export const removeRecords = async (recordId) => {
    const response = await client.delete(`/users/me/records/${recordId}`);
    return response;
}