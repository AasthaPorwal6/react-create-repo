import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyButton from "./components/MyButton";

const App = () => {
  return (
      <div className="app">
          <Router>
              <MyButton to="" />
              <MyButton to="profile" />
              <MyButton to="about" />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" 
                      element={<Profile />} />
                  <Route path="/about" 
                      element={<About />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App;