import { TableAxios } from "./components/TableAxios";
import "./App.css";
import Formulario from "./components/FormPermission";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="body">
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <TableAxios />
            </div>
          }
        ></Route>
        <Route
          path="/add"
          element={
        
              <Formulario />
           
          }
        ></Route>
        <Route
          path="/:id"
          element={<div className="App">Actualizar</div>}
        ></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
