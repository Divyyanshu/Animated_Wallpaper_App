import axios from "axios"

const API_KEY = '49051172-f441d63beb408e9d25be8d9d3'
const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`


const apiCall = async (params)=>{
    try {
        const response = await axios.get(formatUrl(params))
    } catch (error) {
        console.log("got error" , error.message)
        return {success : false , msg : error.message}
    }
}