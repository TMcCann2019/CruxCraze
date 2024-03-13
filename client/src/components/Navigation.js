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
        <nav>
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
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation