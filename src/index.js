import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './sections/App1';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog1';





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

 

  {
    path: "App1",
    element: <App1/>,
  }, 

  {
    path: "Blog",
    element: <Blog/>,
  }, 

  {
    path: "Blog1",
    element: <Blog1/>,
  }, 


  

 
]); 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
