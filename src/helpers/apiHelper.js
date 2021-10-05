import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;

const apiHelper = axios.create({baseURL});

apiHelper.interceptors.request.use(
  async (config) => {
    let token;

    try {
      const jwt_data = await JSON.parse(localStorage.getItem('jwtreservespot'));
      token  = jwt_data.token
    } catch (error) {
      console.log(error)
    }

    if (token) {
      config.headers.authorization = token;
    }
   

    return config
  }
)

export default apiHelper;