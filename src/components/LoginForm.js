import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const LoginForm = () => {
  
const {setLoading,setIsLogin}=useAuth()

const { register, handleSubmit, formState: { errors } } = useForm();

  let navigate = useNavigate();

const [mail,setMail]=useState('');
const [pass,setPass]=useState('');

const handleLogin = () =>{
  
    localStorage.setItem('email',mail);
    localStorage.setItem('password',pass);
    setLoading(true);
    setIsLogin(true);

    navigate('posts')

  
}



  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
     
        <div style={{backgroundColor:'white', width:'30%',display:'flex',flexDirection:'column',borderRadius:'15px',alignItems:'flex-start',padding:'20px'}}>
            <h2 style={{paddingBottom:'20px'}}>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} style={{width:'100%'}}>
               
                    <div style={{width:'100%'}}>
                    <p style={{textAlign:'left',marginBottom:'10px'}}>email</p>
                    <input value={mail} {...register('email',{ required: 'email is required' })} onChange={event => setMail(event.target.value)} placeholder='email@example.com'  style={{width:'100%',paddingLeft:'10px',paddingTop:'15px',paddingBottom:'10px',fontSize:'15px',borderRadius:'10px',borderWidth:'1px',borderColor:'beige',borderStyle:'none',marginBottom:'20px',backgroundColor:'#f1f1f1'}} />
                    <p style={{color:'red',marginBottom:'20px',textAlign:'left'}}>{errors.email?.message}</p>
                    </div>
                    <div style={{width:'100%'}}>
                    <p style={{textAlign:'left',marginBottom:'10px'}}>password</p>
                    <input value={pass} {...register("password",{ required: 'password is required' })} onChange={event => setPass(event.target.value)} placeholder='password'  style={{width:'100%',paddingLeft:'10px',paddingTop:'15px',paddingBottom:'10px',fontSize:'15px',borderRadius:'10px',borderWidth:'1px',borderColor:'beige',borderStyle:'none',marginBottom:'20px',backgroundColor:'#f1f1f1'}} />
                    <p style={{color:'red',marginBottom:'20px',textAlign:'left'}}>{errors.password?.message}</p>
                    </div>

                    <div >
                      {/* <p style={{color:'red',marginTop:'20px',marginBottom:'20px',textAlign:'left'}}>{err}</p> */}
                    <a style={{width:'100%',fontSize:'25px',color:'white',paddingTop:'5px',paddingBottom:'10px',paddingLeft:'30px',paddingRight:'30px',backgroundColor:'tomato',borderRadius:'10px',marginTop:'40px'}} onClick={handleSubmit(handleLogin)} href="#">Login</a>  

                    </div>
                         
                </form>
               
        </div>


</div>


  )
  }

export default LoginForm