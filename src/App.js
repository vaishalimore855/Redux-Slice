import "./App.css";

import Todo from "./Todo";
import Todos from "./Todos";
import {
  Route,
  Routes,
  useNavigate,
  Router,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todo/:id" element={<Todo />} />
          <Route path="/" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
