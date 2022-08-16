import './App.css';
import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Loading from './components/Loading';
import Posts from './components/Posts';
import {useAuth} from './context/authContext'

function App() {

  const {loading,setLoading,isLogin}=useAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[loading]);

  if(loading){   
    return(
      <>
      <Navbar/>
        <Loading/>
      </>
    )
  }
  else{

    return (
      <div className="App" style={{backgroundColor:'#f5f5f5',minHeight:'900px'}}>
         <Navbar/>
        {isLogin ?
        <Posts/>
        :

      <Routes>
        
        <Route path='/' element={<Home/> } />

        <Route path='login' element={<LoginForm/>} />
      
      </Routes>
        }
       
      </div>
    );
  }

  }

 

export default App;
