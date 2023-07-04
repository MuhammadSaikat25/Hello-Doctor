import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,updateProfile } from "firebase/auth";
import app from "./fireBase";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider();
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
   
    const google=()=>{
     return   signInWithPopup(auth,googleProvider)
    }
    const update=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName: name
        })
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
        createUser,LogIn,LogOut,user,loading,google,update
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;