import React, {
  createContext,
  useContext,
  useState,
} from "react";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    // const [error, setError] = useState('');
    // const [email,setEmail]=useState('');
    // const[password,setPassword]=useState('');

    // const login = (email,password) => {
    //   setLoading(true);
    //   if(email=='' || password ==''){
    //     setError('email or password is incorrect')
    //     setLoading(false);
    //   }
    //   else{
    //     setEmail(email);
    //     setPassword(password);
    //     localStorage.setItem('email',email);
    //     localStorage.setItem('password',password);
    //     setLoading(false);
    //     <Navigate to='posts' />
    //   }
    
    // };

    // const logout=()=>{
    //   setLoading(true);
    //   localStorage.removeItem("email");
    //   if(localStorage.getItem('email')==null){
    //     setLoading(false);
    //   <Navigate to='login' />

    //   }      
// }

    return (
      <AuthContext.Provider value={{ loading,isLogin,setIsLogin,setLoading}}>
        {children}
      </AuthContext.Provider>
    );
  };


  export { AuthProvider };
