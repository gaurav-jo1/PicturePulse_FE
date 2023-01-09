import React,{useEffect} from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import "./App.scss";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EditPage from "./pages/EditPage";
import RequireAuth from "./utils/RequireAuth";
import ThemeContextProvider from "./context/ThemeContextProvider";
import AuthProvider from "./context/AuthContext";
import LoadingScreen from "./components/LoadingScreen";
import Welcome from "./pages/Welcome";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user refreshed the page
    if (performance.navigation.type == 1) {
      // Redirect to the home page
      navigate("/")
    }
  }, []);
  return (
    <AuthProvider>
      <div className="app">
        <ThemeContextProvider>
          <Routes>
            <Route element={<RequireAuth />}>
              <Route exact path="/" element={<Welcome />} />
              <Route exact path="/profile" element={<ProfilePage />} />
              <Route exact path="/Edit" element={<EditPage />} />
              <Route exact path="/loading" element={<LoadingScreen />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </ThemeContextProvider>
      </div>
    </AuthProvider>
  );
};

export default App;
