import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewsContainer = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = () => {
        fetch('/reviews')
            .then((resp) => resp.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error('Error fetching reviews:', error));
    };

    const handleDelete = (review) => {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE',
        }).then((resp) => {
            if (resp.ok) {
                setReviews((prevReviews) => prevReviews.filter((rev) => rev.id !== review.id));
            }
        });
    };

    const updateReview = (updatedReview) => {
        const index = reviews.findIndex((rev) => rev.id === updatedReview.id);
        if (index !== -1) {
            const updatedReviews = [...reviews];
            updatedReviews[index] = updatedReview;
            setReviews(updatedReviews);
        }
    };

    return (
        <>
            {reviews.map((review) => (
                <Review
                    key={review.id}
                    review={review}
                    handleDelete={handleDelete}
                    updateReview={updateReview}
                />
            ))}
        </>
    );
};

export default ReviewsContainer;