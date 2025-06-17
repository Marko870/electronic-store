import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Cart , CategoryPage, Home, Login,ProductPage,SignUp} from "./pages";
import TrendsPage from "./pages/TrendsPage";
const App = () => {
  return (
    <main id="main" className="scroll-smooth">
      <Header />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Login" element={<Login />  }/>
        <Route path="/SignUp" element={<SignUp /> }/>
        <Route path="/categroyPage/:category" element={<CategoryPage /> }/>
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/trends" element={<TrendsPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
