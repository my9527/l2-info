import {
    RouterProvider,
    createBrowserRouter
  } from "react-router-dom";
  import { Layout } from "./layouts"; 
  import { PageRank } from "./pages/Rank";



const routes = [{
    path: '/',
    element: <Layout />,
    children: [{
        path: '',
        element: <PageRank />,
    }]

}];




export default () => {
    return (
        <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    );
}