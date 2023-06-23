import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RegisterForm from "./components/RegisterForm";
import SallonServices from "./components/SallonServices";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Header />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/services" element={<SallonServices />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
