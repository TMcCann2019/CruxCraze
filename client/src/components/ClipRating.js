import React from 'react';
import {FaStar} from 'react-icons/fa';

function ClipRating ({rating}) {
    const clips = []

    for (let i = 0; i < rating; i++) {
        clips.push(<FaStar key={i} color="yellow" />)
    }

    for (let i = rating; i < 5; i++){
        clips.push(<FaStar key={i} color="gray" />)
    }

    return <div>{clips}</div>
}

export default ClipRating;