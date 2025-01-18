import {createBrowserRouter} from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,

        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/orders",
                element:<div>Order</div>
            },
            {
                path:"/about",
                element:<div>About</div>
            }
        ]
    

    },
]);

export default router;