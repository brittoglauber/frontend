import axios from "axios";

export default axios.create({
    baseURL: 'http://${{secrets.HOST_DNS}}:5000'
})
