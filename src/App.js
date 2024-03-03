import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/action";
import Login from "./Login";
import Header from "./Header";
import UserDetails from "./UserDetails";

function App() {
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());

    if (error) {
      alert(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
  }, [dispatch, error]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
