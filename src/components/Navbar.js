import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import {useLocation} from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  let location=useLocation();
  console.log(location.pathname);
  const { user, password, setLoading } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");

    setLoading(true);
    navigate("/", { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "lightgrey",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <li style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>
            Logo
          </li>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "35%",
            justifyContent: "center",
          }}
        >
          {!user && !password ? (
            <li>
              <Link
                style={{
                  fontSize: "25px",
                  color: "white",
                  paddingTop: "5px",
                  paddingBottom: "10px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  backgroundColor: "tomato",
                  borderRadius: "10px",
                }}
                to={ location.pathname==="/login" ? "/signup" : "/login"}
              >
               { location.pathname==="/login" ? "Sign up" : "Login"}
              </Link>
            </li>
          ) : (
            <>
            <li style={{
                    fontSize: "25px",
                    color: "black",
                    paddingBottom: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    borderRadius: "10px",
                    justifySelf:"center"
                  }}>
                
                 Welcome back <span style={{
                    color: "tomato",
                    fontWeight:"bold"
                
                  }}>{localStorage.getItem("user")}</span>
              </li>
              <li style={{ marginRight: "30px" }}>
                <Link
                  style={{
                    fontSize: "25px",
                    color: "white",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    backgroundColor: "tomato",
                    borderRadius: "10px",
                  }}
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
              
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
