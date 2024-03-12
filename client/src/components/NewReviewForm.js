import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"

function NewReviewForm({review, handleSubmit, handleAddReview, reviewToEdit}){
    const history = useHistory()
    const editForm = !!reviewToEdit

    const formSchema = yup.object().shape({
        rating : editForm ? yup.integer() : yup.integer().required('Must give a rating'),
        comment: yup.string().required('Must have a comment'),
        date : yup.DateTime()
    })

    const editValues = {
        rating: reviewToEdit.rating,
        comment: reviewToEdit.comment,
        date: reviewToEdit.date
    }

    const addValues = {
        rating: '',
        comment: '',
        date: ''
    }

    const formik = useFormik({
        initialValues: editForm ? editValues : addValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch(editForm ? `/reviews/${reviewToEdit.id}` : '/reviews', {
                method: editForm ? "PATCH" : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok){
                    resp.json().then(review => {
                        editForm ? handleSubmit(review) : handleAddReview(review)
                        history.push('/')
                    })
                }
            })
        }
    })

    return (
        <div className = 'App'>
            <Form onsubmit = {formik.handleSubmit}>
                <label>Rating</label>
                <input type = "number" name = "rating" value = {formik.values.rating} onChange = {formik.handleChange} />
                <label>Comment</label>
                <input type = "text" name = "comment" value = {formik.values.comment} onChange = {formik.handleChange} />
                <label>Date</label>
                <input type = "date" name = "date" value = {formik.values.date} onChange = {formik.handleChange} />
                <button type = "submit">{editForm ? 'Update' : 'Submit'}</button>
            </Form>
        </div>
    )
}

export default NewReviewForm

const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:Arial;
    font-size:30px;
    input[type=submit]{
      background-color:green;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `