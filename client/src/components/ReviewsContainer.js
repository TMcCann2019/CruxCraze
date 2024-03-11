import { useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'

function ReviewsContainer(){
    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState(null)
    const history = useHistory()

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

}

export default ReviewsContainer