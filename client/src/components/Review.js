import React, { useState } from 'react';
import styled from'styled-components';
import EditReviewForm from './EditReviewForm';

function Review({ review, handleDelete, updateReview }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleRemove = () => {
        handleDelete(review);
    };

    const handleUpdateReview = (updatedReview) => {
        updateReview(updatedReview);
        setIsEditing(false);
    };

    return (
        <ReviewHeader>
            {isEditing ? (
                <EditReviewForm review={review} handleSubmit={handleUpdateReview} />
            ) : (
                <>
                    <h3>{review.title}</h3>
                    <p>{review.comment}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Date: {review.date}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleRemove}>Delete</button>
                </>
            )}
        </ReviewHeader>
    );
}

export default Review;

const ReviewHeader = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: url('https://d1nymbkeomeoqg.cloudfront.net/photos/18/94/310881_26652_XL.jpg');
    background-size: cover;
`