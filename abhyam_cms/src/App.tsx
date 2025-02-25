import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Hero from "./components/pages/home/home-page/hero";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
     <ToastContainer />
      <Router>
        <Routes>
          <Route element={<Layout />} >
          <Route path="/" element={<Hero />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
