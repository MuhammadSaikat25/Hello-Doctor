import axios from "axios"

const a=()=>{
    axios.get(`${import.meta.env.VITE_SERVER}services`)
        .then(res=>{
            return res.data
        })
}

export {
    a
}