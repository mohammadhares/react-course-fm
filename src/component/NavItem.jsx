const NavItem = (props) => {
    return (
        <li>
            <a href="#" className={props.classes}>{props.label}</a>
        </li>
    );
}

export default NavItem;