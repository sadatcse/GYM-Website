import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.config";
import axios from "axios";
import useAxiosPublic from "../Hook/useAxiosPublic";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const axiosPublic = useAxiosPublic();
    const adminEmail = import.meta.env.VITE_adminEmail ;
    // {console.log(user)}
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = { email: userEmail };
          setUser(currentUser);
          setLoading(false);
      
          if (currentUser) {
            console.log('current', user, currentUser);
            axiosPublic.post('/jwt', loggedUser,{withCredentials:true})
              .then(res => {
                console.log('token response', res.data);
                if (userEmail === adminEmail) {
                  setIsAdmin(true);
                } else {
                  setIsAdmin(false);
                }
              })
              .catch(error => {
                console.error('Error issuing token:', error);
                // Handle error
              });
          } else {
            axiosPublic.post('/logout', loggedUser) 
              .then(res => {
                console.log(res.data);
              })
              .catch(error => {
                console.error('Error logging out:', error);
                // Handle error
              });
            setIsAdmin(false);
          }
        });
      
        return () => {
          unsubscribe();
        };
      }, [user]);

    const authInfo = { 
        user, 
        loading,
        createUser, 
        signInUser,
        signInWithGoogle,
        logOut,
        isAdmin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}
