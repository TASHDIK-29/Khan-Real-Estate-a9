import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        logOut,
        user,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;