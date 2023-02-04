import axios, {isCancel, AxiosError} from 'axios';

const regresInstance = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "Content-type": "application/json"
  }
});

export const fetchUsers = async(): Promise<any> => {
  try{
    return await regresInstance.get('/api/users')
      .then((response) => {
        return {
          status: response.status,
          data: response.data
        }
      })
      .catch((error) => {
        return {
          status: error.status,
          data: error.response
        }
      })
  }
  catch(error){
    return error;
  }
}

export const fetchUser = async(id:string): Promise<any> => {
  try{
    return await regresInstance.get(`/api/users/${id}`)
      .then((response) => {
        return {
          status: response.status,
          data: response.data
        }
      })
      .catch((error) => {
        return {
          status: error.status,
          data: error.response
        }
      })
  }
  catch(error){
    return error;
  }
}