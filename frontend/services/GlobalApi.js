import axios from "axios"

const API_KEY=import.meta.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
    baseURL:"http://localhost:1337/api",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${API_KEY}`
    }
})

export const createNewResume = (data)=>{
   return axiosClient.post("/user-resumes",data)
}


