import "./App.css";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

import AppRoutes from "./routes/index";

function App() {
  return (
    <div>
  
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
