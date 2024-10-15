import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/pages/Home/Home";
import Products from "../components/pages/Products/Products";
import Reviews from "../components/pages/Reviews/Reviews";
import Contact from "../components/pages/Contact/Contact";
import USP from "../components/pages/USP/USP";
import FAQ from "../components/pages/FAQ/FAQ";
import PrivacyPolicy from "../components/pages/PrivacyPolicy/PrivacyPolicy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/reviews",
                element: <Reviews />,
            },
            {
                path: "/faq",
                element: <FAQ />,
            },
            {
                path: "/usp",
                element: <USP />,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    }
]);

export default router;