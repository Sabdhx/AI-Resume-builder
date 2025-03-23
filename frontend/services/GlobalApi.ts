import axios from "axios";
type Props = {
  id: string;
  data: any;
};

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});





const uploadPersonalInformation = async ({ id, data }: Props) => {
  console.log("data", {...data});
 
  try {
    const response = await axiosClient.put(
      `/user-resumes/${id}`,
      {data}
    );
    console.log(response)
  } catch (error:any) {
    console.log(error.message)
  }
 
};

 const getData=async(id:string)=>{
  try {
     const response = await axiosClient.get(`/user-resumes/${id}?populate=*`)
  } catch (error:any) {
    console.log(error.message)
  }
 }



export default {
  uploadPersonalInformation,
  getData
};
