import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from './navigation/Navigation';
import SplashScreen from './screens/SplashScreen';

export default function App(){
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(()=>{
    setTimeout(()=> {
      setIsShowSplash(false);
    }, 3000)
  })
  return <>{isShowSplash ? (<SplashScreen/>) : (<Navigation />)};</>
} 
