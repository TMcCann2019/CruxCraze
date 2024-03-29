import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext} from 'react';
import Authentication from './components/Authentication';
import About from './components/About';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import HomePage from './components/HomePage';
import Locations from './components/Locations';
import AreaForm from './components/AreaForm';
import Area from './components/Area';
import ReviewsContainer from './components/ReviewsContainer';
import { UserContext } from './context/user';
import NewReviewForm from './components/NewReviewForm';
import UpdateUser from './components/UpdateUser';
import ContactForm from './components/ContactForm';

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

    const fetchUser = () => (
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

    const addAreaToList = (area) => {
        fetch('/create_climbing_area', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(area)
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Failed to add climbing area');
                }
            })
            .then(area => {
                setAreas(areas => [...areas, area]);
                history.push(`/locations`);
            })
            .catch(error => console.error('Error adding climbing area:', error));
    };

    const updateUser = (user) => setUser(user);
    
    return (
        <>
            <Navigation updateUser={updateUser} />
            <Switch>
                <Route exact path="/authentication">
                    <Authentication updateUser={setUser} />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path="/locations/:id">
                    <Area areas={areas} user={user} />
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
                <Route path='/reviews/:id/add-review'>
                    <NewReviewForm />
                </Route>
                <Route path="/reviews">
                    <ReviewsContainer />
                </Route>
                <Route exact path="/profile">
                    <Profile user={user} />
                </Route>
                <Route path="/profile/:id">
                    <UpdateUser updateUser={setUser} />
                </Route>
                <Route exact path="/contactForm">
                    <ContactForm />
                </Route>
            </Switch>
        </>
    );
}

export default App;