import { useEffect, useState } from "react";
import Basket from './components/Basket'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import ManageSites from './components/ManageSites'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Site from './components/Site'
import SiteEditForm from './components/SiteEditForm'
import Sites from './components/Sites'
import TourguideLoginForm from './components/TourguideLoginForm'
import Touristsighnupform from './components/Touristsighnupform'
import TouristLoginForm from './components/TouristLoginForm'

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
    fetch("/api/tourguide_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-[93vh] bg-flow-grey-bg text-white">
        <Navbar user={user} setUser={setUser} items={items} setItems={setItems}/>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route
            path="/_login"
            element={<TouristLoginForm setUser={setUser} />}
          />
          <Route
            path="/view_site/:id"
            element={<Sites items={items} setItems={setItems} />}
          />
          <Route
            path="/cart"
            element={<Basket items={items} setItems={setItems} />}
          />
          <Route
            path="/customer_signup"
            element={<Touristsighnupform setUser={setUser} />}
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
    </>
  );
}

export default App
