import React from 'react'
import {useHistory} from 'react-router-dom'
import ReviewsContainer from './ReviewsContainer'

function Area({area}){
    const history = useHistory()

    return (
        <>
            <div className="area-container">
                <h2>Area</h2>
                <p>{area.name}</p>
                <p>{area.difficulty}</p>
                <p>{area.address}</p>
                <p>{area.need_own_gear}</p>
                <p>{area.retail_shop}</p>
                <p>{area.fitness_area}</p>
                <p>{area.lead_climbing}</p>
                <p>{area.bouldering}</p>
                <p>{area.moon_board}</p>
                <p>{area.kilter_board}</p>
                <button onClick={history.goBack}>Back</button>
            </div>
            <ReviewsContainer />
        </>
    )
}

export default Area