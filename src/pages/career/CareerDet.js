import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'


const CareerDet = () => {
    const { id } = useParams()
    const career = useLoaderData()
    console.log(career)
    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary:{career.salary}</p>
            <p>Location:{career.location}</p>
            <div className="details">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, doloribus consequuntur nisi sit enim repudiandae eaque blanditiis dolores odit itaque. Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    )
}

export default CareerDet


export const careerDetLoader = async ({ params }) => {
    const { id } = params


    const res = await fetch("http://localhost:4000/careers/" + id)

    if (!res.ok) {
        throw Error("could NOt find that Career of " + id)
    }
    return res.json()
}