import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NewReviewForm from './NewReviewForm';

function Review({ review, handleDelete, updateReview, handleAddReview, reviewToEdit }) {
    const history = useHistory();
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
                <NewReviewForm
                    review={review}
                    handleSubmit={handleUpdateReview}
                    reviewToEdit={reviewToEdit}
                    handleAddReview={handleAddReview}
                    buttonText="Update"
                />
            ) : (
                <>
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
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