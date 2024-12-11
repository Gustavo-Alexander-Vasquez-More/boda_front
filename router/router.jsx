import { createBrowserRouter } from "react-router-dom";
import Index from "../src/pages/index";
import Template from "../src/pages/template";

const router = createBrowserRouter([

{ path: "/", element: <Template/> },
])
export default router