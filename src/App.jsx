import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import {Navbar} from "../component/Navbar/Navbar.jsx";
import {Home} from "../pages/Home/Home.jsx";


export default function App() {

  return (
    <div>
     
      <Navbar />
      {/* Routes */}
      <Container className="my-3 py-3">
        <Routes>
         
          {/* Public Routes */}
          <Route path="/" Component={Home} />
        </Routes>
      </Container>
    </div>
  );
}
