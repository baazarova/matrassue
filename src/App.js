import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Buyurtmalar } from "./pages/buyurtmalar/buyurtmalar";
import { Manzil } from "./pages/manzil/manzil";
import { Layout } from "./components/layout/layout";
import { Customers } from "./pages/customers/customers";
import { Mahsulot } from "./pages/mahsulot/mahsulot";
import { Texnologiya } from "./pages/texnologiya/texnologiya";
import { Toifalar } from "./pages/toifalar/toifalar";

function App() {
  return (
    <div className="app">
      <Routes>

        <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Buyurtmalar />} />
            <Route path="/buyurtmalar" element={<Buyurtmalar />} />
            <Route path="/manzil" element={<Manzil />} />
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/mahsulot" element={<Mahsulot/>}/>
            <Route path="/texnologiya" element={<Texnologiya/>}/>
            <Route path="/toifalar" element={<Toifalar/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
