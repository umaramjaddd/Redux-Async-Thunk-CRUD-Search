
import "./App.css";
import Header2 from "./Components/Header2";
import CreateUser from "./Components/CreateUser";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AllUsers from "./Components/AllUsers";
import { Test3 } from "./Components/Test3";

import { Test2 } from "./Components/Test2";
import UpdateUser from "./Components/UpdateUser";
function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <AllUsers />,
    },
    {
      path: "/createuser",
      element: <CreateUser />,
    },
  
    {
      path: '/test2',
      element: <Test2 />
    },

    {
      path: '/test3',
      element: <Test3 />
    },
    {
      path: '/updateuser',
      element: <UpdateUser />
    }
  ])


  return (
    <div className="App">
    <Header2 />
 <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
