import { useParams } from "react-router-dom";
import { serviceData } from "./data";

const ServiceDetails = () => {
    const { id } = useParams();
    const data = serviceData.find(service => service.id === Number(id));
    return (  
        <>
            <h1>Service Details</h1>
            <p>{data.title}</p>
        </>
    );
}
 
export default ServiceDetails;