import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Review from './Review';

function ReviewsContainer() {
    const [reviews, setReviews] = useState([]);
    const [reviewToEdit, setReviewToEdit] = useState(null);
    const history = useHistory();

    const addReview = (review) => setReviews(current => [...current, review]);
    const deleteReview = (deletedReview) => setReviews(reviews => reviews.filter((review) => review.id !== deletedReview.id));
    const updateReview = (review) => {
        setReviewToEdit(review);
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

    function handleAddReview(review, area, user, rating, comment, date) {
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                review: review,
                user_id: user.id,
                climbing_area_id: area.id,
                rating: rating,
                comment: comment,
                date: date
            })
        }).then(resp => {
            if (resp.ok) {
                addReview(review);
                history.push(`/locations/${area.id}`);
            }
        }).catch(error => console.error('Error adding review:', error));
    }

    return (
        <>
            {reviews.map((review) => (
                <Review key={review.id} review={review} handleDelete={handleDelete} updateReview={updateReview} handleAddReview={handleAddReview} reviewToEdit={reviewToEdit}/>
            ))}
        </>
    );
}

export default ReviewsContainer;