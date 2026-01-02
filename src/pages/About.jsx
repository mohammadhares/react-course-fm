import { useParams } from "react-router-dom";

const About = () => {
    const {section , id } = useParams()
    return ( 
        <>
            <h1>About</h1>
            <div>id : {id}</div>
            <div>Section : {section}</div>
        </>
     );
}
 
export default About;