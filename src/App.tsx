import React from 'react';
import * as Screens from './screens';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomRoutes from './hoc/CustomRoutes';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CustomRoutes header component={Screens.Home} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
