import { useLocation, useSearchParams } from "react-router-dom";

const Dashboard = () => {
    const [params] = useSearchParams()
    const page = params.get('page')
    const pageSize = params.get('page_size')

    const location = useLocation()
    console.log('Location', location.pathname)
    return ( 
        <>
            <h1>Dashboard</h1>
            Page : {page} <br />
            Page Size : {pageSize}
        </> 
    );
}
 
export default Dashboard;