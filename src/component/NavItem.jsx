import { NavLink } from "react-router-dom";

const NavItem = ({ label , path , classes}) => {
    return (
        <li>
            <NavLink 
                to={path} 
                className={classes}>
                {label}
            </NavLink>
        </li>
    );
}

export default NavItem;