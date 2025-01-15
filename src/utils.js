import axios from 'axios'

const url='http://localhost:8000'

export const getProducts=async ()=>{
    const response=await axios.get(url+'/products')
    return response
}

export const updateCompleted=async (id)=>{
    const response=await axios.get(url+'/product/'+id)
    return response
}