import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from "./fireBase";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState('')

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}user/admin/${user?.email}`)
            .then(res => res.json())
            .then(data=>{
                setAdmin(data.admin)
            })
    }, [user])
    console.log(admin)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        return signOut(auth)
    }

    const google = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const update = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    console.log(user)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {

                axios.post(`${import.meta.env.VITE_SERVER}jwt`, { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem('jwt-token', data.data)
                    })
                setLoading(false)
            } else {
                localStorage.removeItem('jwt-token')
            }
        })
        return () => {
            unSubscribe()
        }
    })

    const authInfo = {
        createUser, LogIn, LogOut, user, loading, google, update,admin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;