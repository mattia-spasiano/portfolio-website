import {  Link } from "react-router-dom"
export default function PageNotFound() {
    return (
        <>
        <div className="not-found">
            <p>ERROR 404</p>
            <p>Page not found</p>
            <Link to='/' className="return">Return Home</Link>
        </div>
        </>
    )
}