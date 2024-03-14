import React from 'react'
import {useHistory} from 'react-router-dom'
import Area from './Area'

function AreaContainer({area}){
    const history = useHistory()

    return (
        <>
            <div className="area-container">
                <h2>{area.name}</h2>
                <p>{area.difficulty}</p>
                <button onClick={<Area area={area} />}>View Details</button>
            </div>
        </>
    )

}

export default AreaContainer