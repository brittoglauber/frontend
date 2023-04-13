import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import IUser from "../../types/IUser";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [username, setUsername] = useState<IUser | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('token');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.username) {
                    setUsername(data.username);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.username && data.token) {
            setUsername(data.username);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUsername(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ username, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}