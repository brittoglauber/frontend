import { createContext } from 'react';
import IUser from '../../types/IUser';

export type AuthContextType = {
    username: IUser | null;
    signin: (username: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);