import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext} from 'react';
import Authentication from './components/Authentication';
import About from './components/About';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import HomePage from './components/HomePage';
import Locations from './components/Locations';
import AreaForm from './components/AreaForm';
import ReviewsContainer from './components/ReviewsContainer';
import { UserContext } from './context/user';

function App() {
    const [areas, setAreas] = useState([]);
    const {user, setUser} = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        fetchUser();
        fetchAreas();
    }, []);

    const fetchAreas = () => {
        fetch('/climbing_areas')
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Failed to fetch climbing areas');
                }
            })
            .then(data => setAreas(data))
            .catch(error => console.error('Error fetching climbing areas:', error));
    };

    const fetchUser = () => {
        fetch('/users')
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Failed to fetch user data');
                }
            })
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    };

    const addAreaToList = (areaData) => {
        fetch('/climbing_areas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(areaData)
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Failed to add climbing area');
                }
            })
            .then(area => {
                setAreas(prevAreas => [...prevAreas, area]);
                history.push(`/locations`);
            })
            .catch(error => console.error('Error adding climbing area:', error));
    };
    console.log(areas)
    return (
        <>
            <Navigation updateUser={setUser} />
            <Switch>
                <Route exact path="/authentication">
                    <Authentication updateUser={setUser} />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path="/locations/:id">
                    <Locations areas={areas} />
                </Route>
                <Route path="/locations">
                    <Locations areas={areas} />
                </Route>
                <Route path="/areaForm">
                    <AreaForm addAreaToList={addAreaToList}/>
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/reviews">
                    <ReviewsContainer />
                </Route>
                <Route exact path="/profile">
                    <Profile user={user} />
                </Route>
            </Switch>
        </>
    );
}

export default App;