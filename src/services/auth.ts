import axios from "axios"

const API_URL = "http://18.231.164.126:5000/user"

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.acessToken) {{
                    localStorage.setItem("user", JSON.stringify(response.data))
                }}
                return response.data
            })
       
    }

    logout() {
        localStorage.removeItem("user")
    }

    register(username: string, password: string) {
        return axios.post(API_URL + "signup", {
            username,
            password
        })
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService()