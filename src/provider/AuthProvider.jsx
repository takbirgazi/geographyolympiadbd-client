import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // User Manage Start
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const logOut = () => {
        return signOut(auth);
    }
    // User Manage End

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        logInUser,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}