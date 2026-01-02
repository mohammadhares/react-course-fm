import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate()
    const username = 'admin'
    const password = '123'

    let client_username = 'admin'
    let client_password = '123'

    useEffect(() => {
        if(username !== client_username || password !== client_password){
            navigate('/sign-in')
            console.log('Called')
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
    
}
 
export default ProtectedRoute;