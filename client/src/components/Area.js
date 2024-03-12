import React from 'react'
import {useHistory} from 'react-router-dom'
import ReviewsContainer from './ReviewsContainer'

function Area({area}){
    const history = useHistory()

    return (
        <>
            <div className="area-container">
                <h2>{area.name}</h2>
                <p>{area.description}</p>
                <button onClick={() => history.push(`/climbing_areas/${area.id}`)}>View Details</button>
            </div>
            <div className = "review-container">
                <ReviewsContainer />
            </div>
        </>
    )

}

export default Area