import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import * as yup from "yup"
import { useFormik } from 'formik'
import { UserContext } from "../context/user"
import styled from "styled-components"

function UpdateUser({user, updateUser}){
    const [isEditing, setIsEditing] = useState(false)
    const history = useHistory()
    
    const formSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        review_count: yup.number()
    })

    const formik = useFormik({
        initialValues: {
            name: user.name,
            email: user.email,
            password: user.password,
            review_count: user.review_count
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch(`/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then(resp => {
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
        {formik.errors && Object.values(formik.errors).map((error) => <h2 style={{color: 'red'}}>{error}</h2>)}
        <Form onSubmit={formik.handleSubmit}>
            <label>
                Name: 
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
            </label>
            <label>
                Email: 
                <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            </label>
            <input type ='submit' value={isEditing? 'Update User!' : 'Save Changes!'} />
        </Form>
        </>
    )
}

export default UpdateUser

const Form = styled.form`
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