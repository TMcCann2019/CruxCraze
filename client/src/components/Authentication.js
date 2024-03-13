import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"
import { UserContext } from '../context/user';

function Authentication({updateUser}) {
    const [signUp, setSignUp] = useState(false)
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)
        const formSchema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: signUp ? yup.string().required("Email is required") : null,
            password: yup.string().required("Please enter a password"),
            review_count: 0
        })
    
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            review_count: 0
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
        <button onClick={handleClick}>{signUp?'Log In!' : 'SignUp!'}</button>
        <Form onSubmit={formik.handleSubmit}>
            <label>
                Name: 
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            </label>
            {signUp && (
            <label>
                Email: 
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
            </label>
            )}
            <input type = 'submit' value={signUp ? 'Sign Up!' : 'Log In!'} />
        </Form>
        </>
    )
}

export default Authentication

export const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;
input[type=submit]{
  background-color:red;
  color: black;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`