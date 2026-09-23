import { createBrowserRouter } from "react-router-dom";
import { Publicroute } from "./Publicroute";
import { privatroutes } from "./privateroutes";
import { Authroute} from "./Authroute";
import { NotFound } from "../Components/NotFound";
export const router = createBrowserRouter([
  Publicroute,
  privatroutes,
  Authroute,
  { path: "*", element: <NotFound /> },
]);
