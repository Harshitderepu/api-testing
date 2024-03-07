import axios from "axios"
const url="https://dummy-practice-2.onrender.com"
//fetch all user fucntion
export const fecthUser= async()=>{
    try {
        return await axios.get(`${url}`)
    } catch (error) {
        console.log("the error while fetching the data is", error.message)
    }
}
//signup function
export const signup=async(data)=>{
    try {
        return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log("the error while signingup ", error.message)
    }
}
//signin function
export const signIn=async(data)=>{
    try {
        return await axios.post(`${url}/signin`, data)
    } catch (error) {
        console.log("the error while signingin ", error.message)
    }
}
//delete function...by email
export const DeleteByemail= async(email)=>{
    try {
        return await axios.delete(`${url}/delete`, email)
    } catch (error) {
        console.log("Error While Deleting The User is", error.message)
    }
}
//update function
export const updateData= async(email)=>{
    try {
        return await axios.put(`${url}`, email)
        
    } catch (error) {
        console.log("Error While Updating The User is", error.message)
    }
}
