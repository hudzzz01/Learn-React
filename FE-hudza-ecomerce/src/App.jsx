import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./components/view/HomeView";
import AdminView from "./components/view/AdminView";
import CardProvider from "./components/CardProvider";
import Navbar from "./components/NavBar";
import Bag from "./components/Bag";
import { useState } from "react";
import BagProvider from "./components/BagProvider";
import Footer from "./components/Footer";
import LoginView from "./components/view/LoginView";
import ProtectedRoute from "./auth/protectedRoute";


function App() {
  const [isLoginView, setIsloginView] = useState(false);
  const [login, setLogin] = useState(false);


  return (
    <div>
      <CardProvider>
        <BagProvider>

          <Router>
            <Navbar setIsloginView={setIsloginView} isLoginView={isLoginView} />
            <Routes>
              <Route path="/" element={<HomeView />} />
              {/* <Route path="/admin" element={<AdminView />} /> */}
              <Route path="/login" element={<LoginView setLogin={setLogin} />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={
                  <AdminView setLogin={setLogin} />
                } />
              </Route>
            </Routes>
            {!isLoginView ? <Footer /> : <></>}

          </Router>

        </BagProvider>
      </CardProvider>
    </div>
  )
}

export default App
