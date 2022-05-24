import React from 'react';
import * as Screens from './screens';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomRoutes from './hoc/CustomRoutes';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CustomRoutes header component={Screens.Home} />}
        />
        <Route
          path="/login"
          element={<CustomRoutes header={false} component={Screens.Login} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
