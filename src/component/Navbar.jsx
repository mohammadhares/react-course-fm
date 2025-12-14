import NavItem from "./NavItem";

const Navbar = () => {
    const navItems = [
        {
            label: "Home",
            classes: "text-white"
        },
        {
            label: "About",
            classes: "text-purple"
        }, {
            label: "Services",
            classes: "text-blue"
        }, {
            label: "Contact",
            classes: "text-red"   
        }
    ];
    return ( 
        <nav>
            <ul>
                {navItems.map(item => (
                    <NavItem 
                        key={item.label} 
                        label={item.label} 
                        classes={item.classes}
                    />
                ))}
            </ul>
        </nav>
     );
}

export default Navbar;
