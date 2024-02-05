import { createBrowserRouter } from "react-router-dom";
import { BaseContainer } from "../components/BaseContainer";
import { Greetings } from "../components/Slides/Greetings";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseContainer />,
      children: [
        {
          path: "/1",
          element: <Greetings />,
        }
      ]
    },
  ]);