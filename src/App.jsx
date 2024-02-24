import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuotesPage from "./pages/QuotesPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
