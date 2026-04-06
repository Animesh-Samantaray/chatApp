import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx';
import {Routes,Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import { useAuthStore } from './store/useAuthStore.js';
import { Navigate } from 'react-router-dom';
import {Loader} from 'lucide-react'
import { Toaster } from 'react-hot-toast';

const App = () => {
  const {authUser , checkAuth , isCheckingAuth , onlineUsers} = useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth])
  console.log('onlineUsers : ',onlineUsers)
  console.log({authUser});

  if(isCheckingAuth && !authUser){
    return (
      <div className='flex items-center justify-center h-screen message-fade-in'>
        <Loader className='size-10 animate-spin text-white' />
      </div>
    )
  }

  return (
    <div className="min-h-screen message-fade-in">
    
    <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: 'rgba(255,255,255,0.1)', // Glassmorphism background
      backdropFilter: 'blur(12px)',
      color: '#fff',
      borderRadius: '12px',
      padding: '12px 16px',
      fontSize: '0.9rem',
      boxShadow: '0 8px 32px rgba(124,58,237,0.3)',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    success: {
      iconTheme: {
        primary: '#7C3AED',
        secondary: '#fff',
      },
    },
    error: {
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fff',
      },
    },
  }}
/>

    <Navbar/>
    <Routes>
      <Route path='/' element={authUser ?< HomePage/> :<Navigate to='/login' />}/>
      <Route path='/signup' element={!authUser ?< SignUpPage/>:<Navigate to='/' /> }/>
      <Route path='/login' element={!authUser ?< LoginPage/>:<Navigate to='/' />}/>
      {/* <Route path='/profile' element={authUser ?< ProfilePage/>:<Navigate to='/login' />}/> */}
      <Route path='/settings' element={< SettingsPage/>}/>
      <Route path='/profile' element={ < ProfilePage/>}/>

      
    </Routes>
    </div>
  )
}

export default App
