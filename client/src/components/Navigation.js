import { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/user'

function Navigation({updateUser}){
    const history = useHistory()

    useEffect(() => {
        fetchUserData()
    }, [])

    const fetchUserData = () => {
        fetch('/users')
        .then(resp => {
            if (resp.ok){
                resp.json().then(user => {
                    updateUser(user)
                })
            } else {
                updateUser(null)
            }
        })
    }

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