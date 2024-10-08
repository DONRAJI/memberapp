import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Calendar from './Components/Calendar/Calendar';
import Friends from './Components/Friends/Friends';
import { ThemeProvider } from './Components/Context/themeProvider';
import { GlobalStyle } from './Components/Theme/GlobalStyle';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle/>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/friends" element={<Friends/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;