import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Home from "../../pages/Home";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.username) {
        return <Home />;
    }

    return children;
}