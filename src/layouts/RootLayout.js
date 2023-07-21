import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'



const RootLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <h1>Jobarouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                </nav>
                <BreadCrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout