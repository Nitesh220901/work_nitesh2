import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Protected from './components/Protected';
import Home from './Pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      
      {/* <Route path='/' element = {<Signup/>}/> */}
      <Route path='signup' element = {<Signup/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path = '/' element={<Protected/>}>
        <Route path ='/' index element={<Home/>}/>
      </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router = {router}/> */}
  </React.StrictMode>
);


