import { useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/user';

function Navigation({updateUser}){
    const history = useHistory()
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        fetchUserData()
    }, [])

    const fetchUserData = () => (
        fetch('/authorized')
        .then(resp => {
            if (resp.ok){
                resp.json()
                .then(data => {
                    setUser(data)
                })
            } else {
                setUser(null)
            }
        })
    )   

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE',
        })
     .then(resp => {
        if (resp.ok){
            fetchUserData(null)
            history.push('/')
        }
     })
    }

    return (
        <Navbar>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/locations">Locations</Link>
                </li>
                <li>
                    <Link to="/areaForm">Add a New Area</Link>
                </li>
                <li>
                    <Link to="/authentication">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </Navbar>
    );
}

export default Navigation

const Navbar = styled.nav`
    position: relative;
    background-image: url('https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/33/fd.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    
    button {
        color: Black;
        text-decoration: none;
        cursor: pointer;
    }
`;