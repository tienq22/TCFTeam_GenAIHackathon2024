import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TakeExamScreen from "./screens/TakeExamScreen";
<<<<<<< HEAD
<<<<<<< HEAD
import ResultScreen from "./screens/ResultScreen";
import DetailedAnswersScreen from "./screens/DetailedAnswersScreen";
=======
=======
>>>>>>> f86d90e ([FE] Make suport js and css TakeExamScreen)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
         <Route index={true} path='/' element={<LoginScreen />} />
         <Route path='/register' element={<RegisterScreen />} />
      
      <Route path='' element={<PrivateRoute />}>
        <Route path='/main' element={<HomeScreen />} />
        <Route path='/exams/:id' element={<TakeExamScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



<<<<<<< HEAD



/*import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SubmitScreen from './screens/SubmitScreen';
import RegisterScreen from "./screens/RegisterScreen";
>>>>>>> f4e8046 (Linh)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/main' element={<HomeScreen />} />
        <Route path='/take-exam/:id' element={<TakeExamScreen />} />
        <Route path='/result/:id' element={<ResultScreen />} />
        <Route path='/result/:id/details' element={<DetailedAnswersScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
=======
>>>>>>> 6ceba03 (Updae css)
