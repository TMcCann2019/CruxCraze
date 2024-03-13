import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"

function AreaForm ({addAreaToList}) {
    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        location: yup.object().shape({
            city: yup.string().required("City is required"),
            state: yup.string().required("State is required"),
            postal_code: yup.string().required("Postal Code is required"),
            latitude: yup.number().required("Latitude is required"),
            longitude: yup.number().required("Longitude is required")
        }),
        difficulty: yup.string().required("Difficulty is required"),
        address: yup.string().required("Address is required"),
        clip_rating: yup.number().required("Clip rating is required"),
        number_of_reviews: yup.number(),
        need_own_gear : yup.boolean().required("Need to state if needs gear or not"),
        retail_shop: yup.boolean().required("Need to state if there is a retail area or not"),
        fitness_area: yup.boolean().required("Need to state if there is a fitness area or not"),
        lead_climbing: yup.boolean().required("Need to state if there is lead climbing"),
        bouldering : yup.boolean().required("Need to state if there is bouldering"),
        moon_board : yup.boolean().required("Need to state if there is a moonboard or not"),
        kilter_board : yup.boolean().required("Need to state if there is a kilterboard or not")
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            location : "",
            difficulty: "",
            address: "",
            clip_rating : 0,
            number_of_reviews: 0,
            need_own_gear: "",
            retail_shop: "",
            fitness_area: "",
            lead_climbing: "",
            bouldering: "",
            moon_board: "",
            kilter_board: ""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('/areas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok){
                    resp.json().then(area => {
                        addAreaToList(area)
                        history.push('/')
                    })
                }
            })
        }
    })

    return (
        <div className = 'AreaContainer'>
            <Form onSubmit = {formik.handleSubmit}>
                <label>Name</label>
                <input type = "text" name = "name" value = {formik.values.name} onChange = {formik.handleChange} />
                <label>Location</label>
                <input type = "text" name = "location" value = {formik.values.location} onChange = {formik.handleChange} />
                <label>City</label>
                <input type = "text" name = "location.city" value = {formik.values.location.city} onChange = {formik.handleChange} />
                <label>State</label>
                <input type = "text" name = "location.state" value = {formik.values.location.state} onChange = {formik.handleChange} />
                <label>Postal Code</label>
                <input type = "text" name = "location.postal_code" value = {formik.values.location.postal_code} onChange = {formik.handleChange} />
                <label>Latitude</label>
                <input type = "number" name = "location.latitude" value = {formik.values.location.latitude} onChange = {formik.handleChange} />
                <label>Longitude</label>
                <input type = "number" name = "location.longitude" value = {formik.values.location.longitude} onChange = {formik.handleChange} />
                <label>Difficulty</label>
                <input type = "text" name = "difficulty" value = {formik.values.difficulty} onChange = {formik.handleChange} />
                <label>Address</label>
                <input type = "text" name = "address" value = {formik.values.address} onChange = {formik.handleChange} />
                <label>Clip rating</label>
                <input type = "number" name = "clip_rating" value = {formik.values.clip_rating} onChange = {formik.handleChange} />
                <label>Number of reviews</label>
                <input type = "number" name = "number_of_reviews" value = {formik.values.number_of_reviews} onChange = {formik.handleChange} />
                <label>Need own gear?</label>
                <input type="dropdown" name = "needOwnGear" value = {formik.values.need_own_gear} onChange = {formik.handleChange} />
                <label>Retail shop?</label>
                <input type="dropdown" name = "retailShop" value = {formik.values.retail_shop} onChange = {formik.handleChange} />
                <label>Fitness area?</label>
                <input type="dropdown" name = "fitnessArea" value = {formik.values.fitness_area} onChange = {formik.handleChange} />
                <label>Lead climbing?</label>
                <input type="dropdown" name = "leadClimbing" value = {formik.values.lead_climbing} onChange = {formik.handleChange} />
                <label>Bouldering?</label>
                <input type="dropdown" name = "bouldering" value = {formik.values.bouldering} onChange = {formik.handleChange} />
                <label>Moon board?</label>
                <input type="dropdown" name = "moonBoard" value = {formik.values.moon_board} onChange = {formik.handleChange} />
                <label>Kilter board?</label>
                <input type="dropdown" name = "kilterBoard" value = {formik.values.kilter_board} onChange = {formik.handleChange} />
            </Form>
        </div>
    )
}

export default AreaForm

const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:Arial;
    font-size:30px;
    input[type=submit]{
      background-color:blue;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `