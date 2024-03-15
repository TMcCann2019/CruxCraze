import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Review from './Review';

function ReviewsContainer() {
    const [reviews, setReviews] = useState([]);
    const [reviewToEdit, setReviewToEdit] = useState(null);
    const history = useHistory();

    const deleteReview = (deletedReview) => setReviews(reviews => reviews.filter((review) => review.id !== deletedReview.id));
    const updateReview = (reviewToEdit) => {
        setReviewToEdit(reviewToEdit);
        history.push('/reviews');
    };

    useEffect(() => {
        fetchReviews()
    }, [])

    function fetchReviews() {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(data => setReviews(data))
        .catch(error => console.error('Error fetching reviews:', error))
    }

    function handleDelete(review) {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE',
        }).then(resp => {
            if (resp.ok) {
                deleteReview(review);
                history.push('/');
            }
        });
    }

    return (
        <>
            {reviews.map((review) => (
                <Review key={review.id} review={review} handleDelete={handleDelete} updateReview={updateReview} editReview={reviewToEdit}/>
            ))}
        </>
    );
}

export default ReviewsContainer;