import { Route, Switch, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Authentication from './components/Authentication'
import About from './components/About'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import HomePage from './components/HomePage'
import Locations from './components/Locations'
import AreaForm from './components/AreaForm'

function App(){
    const [areas, setAreas] = useState([])
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        fetchUser()
        fetchAreas()
    }, [])

    const fetchAreas = () => (
        fetch('/climbing_areas')
        .then(resp => resp.json())
        .then(setAreas)
    )

    const fetchUser = () => (
        fetch('/users')
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

    function addAreaToList(area, difficulty, address,clip_rating, number_of_reviews, need_own_gear, retail_shop, fitness_area, lead_climbing, bouldering, moon_board, kilter_board){
        fetch('/climbing_areas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                area: area,
                difficulty: difficulty,
                address: address,
                clip_rating : clip_rating,
                number_of_reviews: number_of_reviews,
                need_own_gear: need_own_gear,
                retail_shop: retail_shop,
                fitness_area: fitness_area,
                lead_climbing: lead_climbing,
                bouldering: bouldering,
                moon_board: moon_board,
                kilter_board: kilter_board
            })
        })
     .then(resp => {
        if (resp.ok){
            resp.json()
         .then(area => {
                addArea(area)
                history.push(`/area/${area.id}`)
            })
        }
     })
    }

    const addArea = (area) => setAreas(current => [...current, area])

    const updateUser = (user) => setUser(user)

    return (
        <>
        <Navigation updateUser = {updateUser} />
            <Switch>
                <Route exact path = '/authentication'>
                    <Authentication updateUser = {updateUser} />
                </Route>
                <Route exact path = '/about'>
                    <About />
                </Route>
                <Route path = '/locations/:id'>
                    <Locations addAreaToList = {addAreaToList} />
                </Route>
                <Route path = '/locations'>
                    <AreaForm addArea = {addAreaToList} />
                </Route>
                <Route exact path = '/' >
                    <HomePage />
                </Route>
                <Route exact path = '/profile'>
                    <Profile user = {user} />
                </Route>
            </Switch>
        </>
    )
}

export default App