import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div>
            <h2>Page NOt Found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae rerum consequatur aperiam provident, alias, ratione autem animi repudiandae dolor deserunt vitae asperiores, eius exercitationem culpa? Deserunt fugiat cum facere.</p>

            <p>Go to the <Link to="/">HomePage</Link></p>
        </div>
    )
}

export default NotFound