import { Link } from "react-router-dom";
import { serviceData } from "./data";

const Service = () => {
    return ( <>
        <h1>Service</h1>
        <ul>
            {serviceData.map(service => (
                <li key={service.id}>
                    <Link to={`/service/${service.id}`}>{service.title}</Link>
                </li>
            ))}
        </ul>
    </> );
}
 
export default Service;