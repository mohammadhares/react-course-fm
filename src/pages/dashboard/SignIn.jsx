import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    return ( <>
    <h1>SignIn</h1>
    <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </> );
}
 
export default SignIn;