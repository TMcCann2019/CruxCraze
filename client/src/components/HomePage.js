import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-container" style={{backgroundImage: 'url("https://wallpapercave.com/wp/wp1933371.jpg")'}}>
            <div className="hero-section">
                <h1>Discover Your Next Climbing Adventure</h1>
                <p>Explore thousands of climbing areas around the world, share your climbing experiences, and connect with fellow climbers.</p>
                <Link to="/locations" className="explore-button">Explore Climbing Areas</Link>
            </div>
            <div className="cta-section">
                <h2>Join CruxCraze Today!</h2>
                <p>Sign up now to start exploring climbing areas, sharing your climbing adventures, and connecting with fellow climbers from around the world.</p>
                <Link to="/authentication" className="signup-button">Sign Up</Link>
            </div>
        </div>
    );
}

export default HomePage;