import { createBrowserRouter } from "react-router-dom";
import HeroPage from "../hero/heroPage";
import HeroDetail from "../hero/heroDetail";
import WeaponPage from "../weapon/weaponPage";
import WeaponDetail from "../weapon/weaponDetail";
import HeroAdd from "../hero/heroAdd";
import HeroEdit from "../hero/heroEdit";

const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <HeroPage />,
        },
        {
            path: "detail",
            element: <HeroDetail />,
          },
          {
            path: "add",
            element: <HeroAdd />,
          },
          {
            path: "edit",
            element: <HeroEdit />,
          },
      ],
    },
    {
        path: "/weapon",
        children: [
            {
              path: "",
              element: <WeaponPage />,
            },
            {
                path: "detail",
                element: <WeaponDetail />,
              },
          ],
      },
  ]);

  export default router;