import Blog from "../pages/Blog";
import Forum from "../pages/Forum";
import GetStarted from "../pages/GetStarted";
import Home from "../pages/Home/Home";
import UploadArtikel from "../pages/UploadArtikel";

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
    {
        path : '/blog',
        element :<Blog />
    },
    {
        path : '/upload-artikel',
        element :<UploadArtikel />
    },
]

export default routes