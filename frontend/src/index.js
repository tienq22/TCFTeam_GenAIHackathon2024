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
import SubmitScreen from './screens/SubmitScreen';
import RegisterScreen from "./screens/RegisterScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<LoginScreen />} /> {/* Thay đổi màn hình mặc định */}
      <Route path='/submit' element={<SubmitScreen />} /> {/* Thay đổi URL của SubmitScreen */}
      <Route path='/register' element={<RegisterScreen />} />
      
      <Route path='' element={<PrivateRoute />}>
        <Route path='/main' element={<HomeScreen />} />
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/main' element={<HomeScreen />} />
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
 */