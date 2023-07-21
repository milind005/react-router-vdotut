import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

export default function CareersError() {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='careers-error'>
            <h1>Error</h1>
            <p>{error.message}</p>
            <Link to="/">Back to the HomePage</Link>
        </div>
    )
}
