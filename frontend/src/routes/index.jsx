import { createBrowserRouter } from "react-router-dom";
import { Publicroute } from "./Publicroute";
import { privatroutes } from "./privateroutes";
import { NotFound } from "../Components/NotFound";
export const router = createBrowserRouter([
  Publicroute,
  privatroutes,
  { path: "*", element: <NotFound /> },
]);
