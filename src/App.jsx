import Login from "./pages/Login";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppRouter />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
