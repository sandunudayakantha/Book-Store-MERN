import {createBrowserRouter} from "react-router";
import App from "../App";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,

        children:[
            {
                path:"/",
                element:<h1 className="." >home</h1>,
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