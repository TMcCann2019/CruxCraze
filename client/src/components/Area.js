import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import ReviewsContainer from './ReviewsContainer'
import styled from'styled-components'
import NewReviewForm from './NewReviewForm'

function Area({areas}){
    const history = useHistory()
    const {id} = useParams()
    const [addingReview, setAddingReview] = useState(false)

    const area = areas.find(area => area.id === parseInt(id))

    if (!area){
        return <div>Area not found</div>
    }

    const handleAddReview = () => {
        setAddingReview(true)
    }

    return (
        <>
            <Container>
                <h2>Area</h2>
                <AttributesContainer>
                    <Attribute>
                        <AttributeLabel>Name:</AttributeLabel>
                        <AttributeValue>{area.name}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Difficulty:</AttributeLabel>
                        <AttributeValue>{area.difficulty}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Address:</AttributeLabel>
                        <AttributeValue>{area.address}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Need your own gear?</AttributeLabel>
                        <AttributeValue>{area.need_own_gear ? "True" : "False"}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Has a retail shop?</AttributeLabel>
                        <AttributeValue>{area.retail_shop ? "True" : "False"}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Is there a fitness area?</AttributeLabel>
                        <AttributeValue>{area.fitness_area ? "True" : "False"}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Can you lead climb here?</AttributeLabel>
                        <AttributeValue>{area.lead_climbing ? "True" : "False"}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Is there bouldering available?</AttributeLabel>
                        <AttributeValue>{area.bouldering ? "True" : "False"}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Is there a moon board/tension board?</AttributeLabel>
                        <AttributeValue>{area.moon_board ? "True" : "False"}</AttributeValue>
                    </Attribute>
                    <Attribute>
                        <AttributeLabel>Is there a kilter board?</AttributeLabel>
                        <AttributeValue>{area.kilter_board ? "True" : "False"}</AttributeValue>
                    </Attribute>
                </AttributesContainer>
                <BackButton onClick={history.goBack}>Back</BackButton>
                <AddReviewButton onClick={handleAddReview}>Add Review</AddReviewButton>
            </Container>
            {addingReview && <NewReviewForm />}
            <ReviewsContainer />
        </>
    );
}

export default Area;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
        ),
        url('https://gravityvault.com/img?f=_media/FLMG/Location_Pictures/GV_FLEMINGTON_NJ_17.jpg&w=350&h=250&r=fit')
            right;
    background-size: cover;
`;

const AddReviewButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const BackButton = styled(AddReviewButton)`
    background-color: #6c757d;
    &:hover {
        background-color: #5a6268;
    }
`;

const AttributesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

const Attribute = styled.div`
    display: flex;
    flex-direction: column;
`;

const AttributeLabel = styled.span`
    font-weight: bold;
    color: #f8f8f8; /* Adjust the color as needed */
`;

const AttributeValue = styled.span`
    color: #d3d3d3; /* Adjust the color as needed */
`;