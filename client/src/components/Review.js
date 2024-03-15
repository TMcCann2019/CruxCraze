import React, { useState } from 'react';
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
        <div className="review">
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
        </div>
    );
}

export default Review;