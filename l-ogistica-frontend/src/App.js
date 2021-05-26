import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import MapaPage from "./pages/acompanhamento";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToastContainer autoClose={5000} position="bottom-center" />
        <Header title="Acompanhamento de Entregas" />
        <MapaPage />
      </div>
    );
  }
}

export default App;
