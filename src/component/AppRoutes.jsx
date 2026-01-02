import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import SignIn from "../pages/dashboard/SignIn";
import SignUp from "../pages/dashboard/SignUp";
import WebsiteLayout from "./layout/WebsiteLayout";
import Dashboard from "../pages/dashboard/dashboard";
import DashbaordLayout from "./layout/DashbaordLayout";
import ServiceDetails from "../pages/ServiceDetails";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<WebsiteLayout><Home /></WebsiteLayout>} />
            <Route path="/about/:section/:id" element={<WebsiteLayout><About /></WebsiteLayout>} />
            <Route path="/service" element={<WebsiteLayout><Service /></WebsiteLayout>} />
            <Route path="/service/:id" element={<WebsiteLayout><ServiceDetails /></WebsiteLayout>} />
            <Route path="/contact" element={<WebsiteLayout><Contact /></WebsiteLayout>} />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <DashbaordLayout>
                            <Dashboard />
                        </DashbaordLayout>
                    </ProtectedRoute>
                } 
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
     );
}
 
export default AppRoutes;