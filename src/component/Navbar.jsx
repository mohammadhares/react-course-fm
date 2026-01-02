import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
    const navItems = [
        {
            label: "Home",
            path: "/",
            classes: "text-white "
        },
        {
            label: "About",
            path: "/about",
            classes: "text-purple "
        }, {
            label: "Services",
            path: "/service",
            classes: "text-blue"
        }, {
            label: "Contact",
            path: "/contact",
            classes: "text-red"   
        }
    ];

    const navigate = useNavigate();

    return ( 
        <nav>
            <ul>
                {navItems.map(item => (
                    <NavItem 
                        key={item.label} 
                        label={item.label} 
                        path={item.path}
                        classes={item.classes}
                    />
                ))}
            </ul>
            <button onClick={() => navigate("/sign-in")}>SignIn</button>
            <button onClick={() => navigate("/sign-up")}>SignUp</button>
        </nav>
     );
}

export default Navbar;
