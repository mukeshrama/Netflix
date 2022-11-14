import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import {Home,Browse,Signin,Signup} from '../pages';

export function IsUserRedirect({ islogin, LoggedInPath, Component, ...rest }) {
  const navigate=useNavigate();  
  useEffect(()=>{
    if(islogin.user)
    {
      navigate(LoggedInPath)
    }
  })
  return (
        <>
          <Component/>
        </>
      
    );
  }

  export function ProtectedRoute({ islogin,Component, ...rest }) {
    const navigate=useNavigate();
    console.log(islogin.user)
    useEffect(()=>{
      if(!islogin.user)
      {
        navigate("/")
      }
    })
     
    
    return (
          <>
            <Component/>
          </>
        
      );
     
  }