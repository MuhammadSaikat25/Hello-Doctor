import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import app from "./fireBase";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const auth=getAuth(app)
    const [loading,setLoading]=useState(true)
    // create user
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const LogIn=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email,password)
    }
    const LogOut=()=>{
      return  signOut(auth)
    }
   
    console.log(user)
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    })

    const authInfo={
        createUser,LogIn,LogOut,user,loading
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;