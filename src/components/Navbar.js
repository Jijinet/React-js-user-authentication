import React from 'react'
import {Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  let navigate = useNavigate();

  const {isLogin,setIsLogin,setLoading}=useAuth()

  const handleLogout=()=>{
    setLoading(true)
    setIsLogin(false);
    navigate('/')
  }

  return (
    <div style={{display:'flex',paddingRight:'20px',paddingLeft:'20px',paddingTop:"30px",paddingBottom:'30px',backgroundColor:'lightgrey',justifyContent:'center'}}>
        <ul style={{width:'90%',display:'flex',justifyContent:'space-between'}}>
       
            <div>
              <li><Link style={{fontSize:'20px',fontWeight:'bold',color:'black'}} to="/">Logo</Link></li>
            </div>
            <div style={{display:'flex',flexDirection:'row',width:'25%',justifyContent:'center'}}>
              <li style={{marginRight:'30px'}}><Link style={{fontSize:'20px',fontWeight:'bold',color:'tomato'}} to="/">Home</Link></li>
              {!isLogin ? 
              <li><Link style={{fontSize:'25px',color:'white',paddingTop:'5px',paddingBottom:'10px',paddingLeft:'30px',paddingRight:'30px',backgroundColor:'tomato',borderRadius:'10px'}} to="login" >Login</Link></li>
              :
              <>
              <li style={{marginRight:'30px'}}><Link style={{fontSize:'25px',color:'white',paddingTop:'5px',paddingBottom:'10px',paddingLeft:'30px',paddingRight:'30px',backgroundColor:'tomato',borderRadius:'10px'}} to="/"  onClick={handleLogout} >Logout</Link></li>
              <li><Link style={{fontSize:'25px',color:'white',paddingTop:'5px',paddingBottom:'10px',paddingLeft:'30px',paddingRight:'30px',backgroundColor:'tomato',borderRadius:'10px'}} to=""  >{localStorage.getItem('email')}</Link></li>

              </>
              } 
              </div>
        </ul>
    </div>
  )
}

export default Navbar