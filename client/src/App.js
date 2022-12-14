import { useEffect, useState } from "react";
import Basket from './components/Basket'
import Footer from './components/Footer'
import ManageSites from './components/ManageSites'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Site from './components/Site'
import SiteEditForm from './components/SiteEditForm'
import Sites from './components/Sites'
import TourguideLoginForm from './components/TourguideLoginForm'
import TouristLoginForm from './components/TouristLoginForm'
import TouristSignupForm from "./components/TouristSighnupForm";
import TourguideSignupForm from "./components/Tourguidesignupform";
import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(0);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.length);
      });
  }, []);

  useEffect(() => {
    fetch("/api/tourist_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/sites").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <div className="min-h-[93vh] bg-flow-grey-bg text-white">
        <Navbar user={user} setUser={setUser} items={items} setItems={setItems}/>
        <Routes>
          <Route path="/" element={<Sites />} />
          <Route
            path="/tourist_login"
            element={<TouristLoginForm setUser={setUser} />}
          />
          <Route
            path="/view_site/:id"
            element={<Site items={items} setItems={setItems} />}
          />
          <Route
            path="/basket"
            element={<Basket items={items} setItems={setItems} />}
          />
          <Route
            path="/tourist_signup"
            element={<TouristSignupForm setUser={setUser} />}
          />

          <Route
            path="/tourguide_login"
            element={<TourguideLoginForm setUser={setUser} />}
          />
          <Route
            path="/tourguide_signup"
            element={<TourguideSignupForm setUser={setUser} />}
          />
          <Route path="/manage_Sites" element={<ManageSites />} />
          <Route path="/site_edit/:id" element={<SiteEditForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
