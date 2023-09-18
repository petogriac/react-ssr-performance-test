import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Listing from "./pages/Listing";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="l/:id" element={<Listing/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
