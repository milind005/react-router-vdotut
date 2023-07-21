import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const Contact = () => {
    const data = useActionData()
    console.log(data)
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method='Post' action="/help/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>


                {data && data.error && <h5>{data.error} </h5>}

            </Form>
        </div >
    )
}

export default Contact


export async function contactAction({ request }) {
    console.log(request)
    const data = await request.formData()

    const subData = {
        email: data.get("email"),
        message: data.get("message")
    }

    if (subData.message.length < 10) {
        return { error: "The message should be gretter than 10 chairs" }
    }


    return redirect("/")


}