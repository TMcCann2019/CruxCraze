import { useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Review from './Review'

function ReviewsContainer(){
    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState(null)
    const [reviewToEdit, setReviewToEdit] = useState([])
    const history = useHistory()

    const addReview = (review) => setReviews(current => [...current, review])
    const deleteReview = (deleted_review) => setReviews(reviews => reviews.filter((review) => review.id !== deleted_review.id))
    const updateReview = (review) => {
        setReviewToEdit(review)
        history.push('/reviews')
    }

    function handleDelete(review){
        fetch(`/climbing_areas/${review.id}`, {
            method: 'DELETE',
        }).then (resp => {
            if (resp.ok){
                deleteReview(review)
                history.push('/')
            }
        })
    }

    function handleAddReview(review, rating, comment, date) {
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                review: review,
                rating: rating,
                comment: comment,
                date : date
            })
        }).then (resp => {
            if (resp.ok){
                addReview(review)
                history.push(`/locations/${.id}`)
            }
        })
    }

    return (
        <>
            {reviews.map((review) => (
                <Review key={review.id} review={review} handleDelete={handleDelete} updateReview={updateReview} handleAddReview={handleAddReview}/>
            ))}
        </>
    )

}

export default ReviewsContainer