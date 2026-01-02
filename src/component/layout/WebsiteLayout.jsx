import Navbar from "../Navbar";

const WebsiteLayout = ({ children }) => {
    return ( 
        <>
            <Navbar />
            {children}
        </>
     );
}
 
export default WebsiteLayout;