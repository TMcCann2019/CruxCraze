import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomePage() {
    return (
        <HomeContainer>
            <Image />
            <ContentContainer>
                <HeroSection>
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
            </ContentContainer>
        </HomeContainer>
    );
}

export default HomePage;

const HomeContainer = styled.div`
    position: relative;
`;

const Image = styled.img.attrs(() => ({
    src: "https://wallpapercave.com/wp/wp1933371.jpg",
}))`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
`;

const HeroSection = styled.div`
    text-align: center;
    color: #fff;
`;

const CTASection = styled.div`
    background-color: rgba(255, 255, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
`;