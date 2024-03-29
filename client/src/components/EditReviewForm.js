import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';

function EditReviewForm({ review, handleSubmit }) {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const formSchema = yup.object().shape({
        rating: yup.number().required('Must give a rating'),
        comment: yup.string().required('Must have a comment'),
        date: yup.date().required('Must provide a date'),
    });

    const formik = useFormik({
        initialValues: review,
        validationSchema: formSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    const handleClear = () => {
        formik.resetForm();
    };

    const handleConfirmation = () => {
        setIsConfirmationOpen(true);
    };

    const handleConfirm = () => {
        formik.handleSubmit();
        setIsConfirmationOpen(false);
    };

    const handleCancel = () => {
        setIsConfirmationOpen(false);
    };

    return (
        <div className="App">
            <Form onSubmit={formik.handleSubmit}>
                <label>Rating</label>
                <input type="number" name="rating" value={formik.values.rating} onChange={formik.handleChange} />
                <label>Comment</label>
                <input type="text" name="comment" value={formik.values.comment} onChange={formik.handleChange} />
                <label>Date</label>
                <input type="date" name="date" value={formik.values.date} onChange={formik.handleChange} />
                <button type="submit">Update</button>
                <button type="button" onClick={handleClear}>
                    Clear
                </button>
                <button type="button" onClick={handleConfirmation}>
                    Confirm
                </button>
            </Form>
            {isConfirmationOpen && (
                <ConfirmationDialog>
                    <p>Are you sure you want to submit the review?</p>
                    <button onClick={handleConfirm}>Yes</button>
                    <button onClick={handleCancel}>No</button>
                </ConfirmationDialog>
            )}
        </div>
    );
}

export default EditReviewForm;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
    font-family: Arial;
    font-size: 30px;
    input[type='submit'] {
        background-color: green;
        color: white;
        height: 40px;
        font-family: Arial;
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const ConfirmationDialog = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    z-index: 9999;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    button {
        margin: 5px;
    }
`;