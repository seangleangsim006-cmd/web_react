import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Service from "./page/Service";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <BrowserRouter>
    <ProductProvider>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </ProductProvider>
    
    </BrowserRouter>
  );
};

export default App;
