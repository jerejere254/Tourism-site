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
import Tourguidesighnupform from './components/Tourguidesighnupform'
import TouristLoginForm from './components/TouristLoginForm'
import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setNumber(data.length);
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
    fetch("/api/tourguide_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <div className="min-h-[93vh] bg-flow-grey-bg text-white">
        <Navbar user={user} setUser={setUser} number={number} setNumber={setNumber}/>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route
            path="/_login"
            element={<TouristLoginForm setUser={setUser} />}
          />
          <Route
            path="/view_site/:id"
            element={<Sites number={number} setNumber={setNumber} />}
          />
          <Route
            path="/cart"
            element={<Basket number={number} setNumber={setNumber} />}
          />
          <Route
            path="/customer_signup"
            element={<Tourguidesighnupform setUser={setUser} />}
          />

          <Route
            path="/vendor_login"
            element={<TourguideLoginForm setUser={setUser} />}
          />
          <Route
            path="/vendor_signup"
            element={<TourguideLoginForm setUser={setUser} />}
          />
          <Route path="/manage_products" element={<ManageSites />} />
          <Route path="/product_edit/:id" element={<SiteEditForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
