import React from 'react'
import styled from 'styled-components'
import { UserContext } from "../context/user"
import {useContext} from 'react'

function Profile(){
    const {user, setUser} = useContext(UserContext)

    return (
        <ProfileContainer>
            <ProfileHeader>
                <h2>{user.name}'s Profile</h2>
            </ProfileHeader>
            <ProfileInfo>
                <p>Email: {user.email}</p>
                <p>Number of Reviews: {user.review_count}</p>
            </ProfileInfo>
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const ProfileInfo = styled.div`
    p {
        margin-bottom: 10px;
    }
`