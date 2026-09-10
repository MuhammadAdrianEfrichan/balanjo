import Forum from "../pages/Forum";
import GetStarted from "../pages/GetStarted";
import Home from "../pages/Home/Home";

const routes =[
    {
        path : '/',
        element :<Home />
    },
    {
        path : '/get-started',
        element :<GetStarted />
    },
    {
        path : '/forum',
        element :<Forum />
    },
]

export default routes