

function ReviewsContainer(){

    function handleDelete(review){
        fetch(`/climbing_areas/${review.id}`, {
            method: 'DELETE',
        }).then (resp => {
            if (resp.ok){
                deleteReview(area)
                history.push('/')
            }
        })
    }

}

export default ReviewsContainer