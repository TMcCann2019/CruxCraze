import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { UserContext } from "../context/user"
import UpdateUser from './UpdateUser'

function Profile(){
    const {user, setUser} = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)

    const handleClick = () => setIsEditing((isEditing) => !isEditing)

    return (
        <ProfileContainer>
            <ProfileHeader>
                <h2>{user.name}'s Profile</h2>
            </ProfileHeader>
            <ProfileInfo>
                <p>Email: {user.email}</p>
                <p>Number of Reviews: {user.review_count}</p>
            </ProfileInfo>
            {isEditing? (
                <UpdateUser user={user} updateUser={setUser} />
            ) : (
                <button onClick={handleClick}>Edit</button>
            )}
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
    background: url('https://d1nymbkeomeoqg.cloudfront.net/photos/22/16/343150_21992_XL.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: White;
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