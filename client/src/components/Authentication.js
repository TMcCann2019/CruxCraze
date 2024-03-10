import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"

function Authentication({updateUser}) {
    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)
        const formSchema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: signUp ? yup.string().required("Email is required") : null,
            password: yup.string().required("Please enter a password")
        })
    
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch(signUp ? '/signup' : '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values, null, 2)
            })
            .then((resp) => {
                if (resp.ok){
                    resp.json().then(user => {
                        updateUser(user)
                        history.push('/')
                    })
                } else {
                    updateUser(null)
                    history.push('/authentication')
                }
            })        
        }
    })

    return (
        <>
        {formik.errors && Object.values(formik.errors).map((error) => <h2 style = {{color: 'red'}}>{error}</h2>)}
        <h2>Please Log in or Sign Up!</h2>
        <h2>{signUp?'Already a member?' : 'Not a member?'}</h2>
        <button onClick={handleClick}>{signUp?'Log In!' : 'Register now!'}</button>
        <Form onSubmit={formik.handleSubmit}>
            <label>
                Name: 
                <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            </label>
            {signUp && (
            <>
            <label>
                Email: 
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
            </label>
            </>
            )}
            <input type = 'submit' value={signUp ? 'Sign Up!' : 'Log In!'} />
        </Form>
        </>
    )
}

export default Authentication