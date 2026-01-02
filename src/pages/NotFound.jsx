import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }

    return ( 
        <>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={goBack}>Go Back</button>
        </>
     );
}
 
export default NotFound;