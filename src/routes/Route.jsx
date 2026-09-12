import Blog from "../pages/Blog";
import DetailBlog from "../pages/DetailBlog";
import ECommerce from "../pages/ECommerce";
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
    {
        path : '/detail-blog',
        element :<DetailBlog />
    },
    {
        path : '/E-Commerce',
        element :<ECommerce />
    },
]

export default routes