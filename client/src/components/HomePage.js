import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomePage() {
    return (
        <HomeContainer>
            <HeroSection>
                <Image />
                <div className="text-container">
                    <h1>Discover Your Next Climbing Adventure</h1>
                    <h3>Explore thousands of climbing areas around the world, share your climbing experiences, and connect with fellow climbers.</h3>
                    <Link to="/locations" className="explore-button">Explore Climbing Areas</Link>
                </div>
            </HeroSection>
            <CTASection>
                <div className="text-container">
                    <h2>Join CruxCraze Today!</h2>
                    <p>Sign up now to start exploring climbing areas, sharing your climbing adventures, and connecting with fellow climbers from around the world.</p>
                    <Link to="/authentication" className="signup-button">Sign Up</Link>
                </div>
            </CTASection>
        </HomeContainer>
    );
}

export default HomePage;

const HomeContainer = styled.div`
    position: relative;
`;

const HeroSection = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: Grey;
`;

const Image = styled.img.attrs(() => ({
    src: "https://wallpapercave.com/wp/wp1933371.jpg",
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
`;

const CTASection = styled.div`
    background-color: #f6f6f6;
    padding: 50px 0;
    text-align: center;
    color: #333;
`;