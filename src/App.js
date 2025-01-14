import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <p className="logoName">Life-Style-Notes</p>
        <Link to="/"> Главная </Link>

        {!isAuth ? (
          <Link to="/login"> Войти </Link>
        ) : (
          <>
            <Link to="/createpost"> Написать пост </Link>
            <button className="logOut" onClick={signUserOut}>
              Выйти
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      <footer className="footer">
        <div>
          <p className="logoName">Life-Style-Notes</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
