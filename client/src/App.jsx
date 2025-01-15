import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./listproducts.jsx";
import AddProduct from "./addproducts.jsx";
import Update from "./Update.jsx";
import Navbar from "./Navbar.jsx";
import Footer from './footer.jsx';
import Login from './Login.jsx';
import Signup from './Singup.jsx';
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("home");
  const [id, setId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = () => {
    axios
      .get("http://127.0.0.1:3001/api/product/get")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handelAdd = (body) => {
    axios
      .post("http://127.0.0.1:3001/api/product/add", body)
      .then((res) => {
        console.log("added successfully");
        fetchProducts();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handelDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:3001/api/product/${id}`)
      .then((res) => {
        console.log("deleted successfully");
        fetchProducts();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handelUpdate = (body) => {
    axios
      .put(`http://127.0.0.1:3001/api/product/${id}`, body)
      .then((res) => {
        console.log("updated successfully");
        fetchProducts();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const changeView = (view) => {
    setView(view);
  };

  const getId = (id) => {
    setId(id);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    changeView("home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    changeView("home");
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar 
        changeView={changeView} 
        isLoggedIn={isLoggedIn} 
        handleLogout={handleLogout} 
        setSearchTerm={setSearchTerm}
      />
      <div className="container">
        {view === "add" ? (
          <AddProduct changeView={changeView} handelAdd={handelAdd} />
        ) : view === "home" ? (
          <List
            getId={getId}
            changeView={changeView}
            products={filteredProducts}
            handelDelete={handelDelete}
          />
        ) : view === "update" ? (
          <Update id={id} changeView={changeView} handelUpdate={handelUpdate} />
        ) : view === "login" ? (
          <Login changeView={changeView} handleLogin={handleLogin} />
        ) : view === "signup" ? (
          <Signup changeView={changeView} />
        ) : null}
      </div>
      <Footer /> 
    </div>
  );
};

export default App;