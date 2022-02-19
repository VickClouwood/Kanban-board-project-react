import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Kanban from "./Kanban";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Kanban" element={<Kanban />} />
      </Routes>
    </Router>
  );
}

export default App;
