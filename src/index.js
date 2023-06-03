import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CreateEmployee } from './pages/Create-employee';
import { EmployeesList } from './pages/Employees-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<CreateEmployee />} />
          <Route exact path="/employeeslist" element={<EmployeesList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);