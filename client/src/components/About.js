import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <AboutContainer>
            <Image />
            <ContentContainer>
                <h2>About CruxCraze</h2>
                <p>Welcome to CruxCraze, your ultimate destination for discovering and exploring amazing climbing spots around the world!</p>
                <SectionTitle>Our Mission</SectionTitle>
                <p>At CruxCraze, our mission is to provide climbers of all levels with a platform to find and share their favorite climbing areas, connect with fellow climbers, and make informed decisions about where to climb next.</p>
                <SectionTitle>Key Features</SectionTitle>
                <ul>
                    <li>Explore a vast database of climbing areas with detailed information on difficulty, amenities, and user reviews.</li>
                    <li>Rate and review climbing areas based on your experience to help fellow climbers make informed decisions.</li>
                    <li>Search for climbing areas by location, difficulty level, amenities, and more.</li>
                    <li>Create your own climbing areas and share them with the community.</li>
                </ul>
                <SectionTitle>Meet the Team</SectionTitle>
                <p>CruxCraze was created by a passionate climber and outdoor enthusiast dedicated to making climbing more accessible and enjoyable for everyone.</p>
                <ul>
                    <li>Tim McCann - Founder & CEO</li>
                    <li>Tim McCann - Lead Developer</li>
                </ul>
                <SectionTitle>Support and Contact</SectionTitle>
                <p>If you have any questions about CruxCraze, feel free to contact us at the following:</p>
                <ul>
                    <li>cruzcrazesupport@gmail.com</li>
                </ul>
            </ContentContainer>
        </AboutContainer>
    );
}

export default About;

const AboutContainer = styled.div`
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
    height: 100vh;
    background-color: rgba(255, 255, 0, 0.8); 
    padding: 20px;
    border-radius: 10px;
`;

const SectionTitle = styled.h3`
    margin-top: 20px;
`;