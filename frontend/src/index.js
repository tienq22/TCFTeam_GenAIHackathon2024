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
<<<<<<< HEAD
import ResultScreen from "./screens/ResultScreen";
import DetailedAnswersScreen from "./screens/DetailedAnswersScreen";
=======
=======
>>>>>>> f86d90e ([FE] Make suport js and css TakeExamScreen)
=======
>>>>>>> 297cd9b ([FE] Make suport js and css TakeExamScreen)

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
<<<<<<< HEAD


=======
=======
>>>>>>> 40414784b14e236386caf1f76fe349b24f3125a2


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
<<<<<<< HEAD
>>>>>>> f4e8046 (Linh)
=======
>>>>>>> 40414784b14e236386caf1f76fe349b24f3125a2

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/main' element={<HomeScreen />} />
<<<<<<< HEAD
        <Route path='/take-exam/:id' element={<TakeExamScreen />} />
        <Route path='/result/:id' element={<ResultScreen />} />
        <Route path='/result/:id/details' element={<DetailedAnswersScreen />} />
=======
>>>>>>> 40414784b14e236386caf1f76fe349b24f3125a2
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
=======
>>>>>>> 6ceba03 (Updae css)
=======
 */
>>>>>>> 39c448e2d387d0bf36191d37a343614cbb3a0e30
>>>>>>> 40414784b14e236386caf1f76fe349b24f3125a2
