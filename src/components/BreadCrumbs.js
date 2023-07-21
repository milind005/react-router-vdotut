import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {

    let location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(cur => cur !== "")
        .map(cur => {
            currentLink += "/" + cur
            return (
                <div className="crumb" key={cur}>
                    <Link to={currentLink}>{cur}</Link>
                </div>
            )

        })
    console.log(crumbs)

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}

export default BreadCrumbs