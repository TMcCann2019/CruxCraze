**CruxCraze Climbing App**  
CruxCraze is a web application for climbers to explore climbing areas, share reviews, and connect with other climbers. This repository contains the codebase for the CruxCraze web application, built with Flask on the backend and React on the frontend.  

**Table of Contents**  
- About Component  
- Area Component  
- AreaContainer Component  
- AreaForm Component  
- Authentication Component  
- EditReviewForm Component  
- HomePage Component  
- Locations Component  
- Navigation Component  
- NewReviewForm Component  
- Profile Component  
- Review Component  
- ReviewsContainer Component  
- UserContext Component  
- App Component  

**About Component**  
The About component displays information about the CruxCraze climbing application.  

**Area Component**  
The Area component displays detailed information about a specific climbing area.

   **Overview**  
The Area component functions as follows:

1. Data Retrieval:  
It retrieves the list of climbing areas and the current user's information from the application's state.
Utilizes the useHistory and useParams hooks from React Router to manage navigation and access URL parameters.

2. Area Information Display:  
Renders detailed information about the selected climbing area, including its name, difficulty level, address, and various amenities such as gear requirements, retail shops, fitness areas, and climbing features like lead climbing, bouldering, moon boards, and kilter boards.  

3. Review Management:  
Provides functionality for users to add reviews for the climbing area.
When the "Add Review" button is clicked, it displays a form (NewReviewForm) allowing users to input their rating, comment, and the date of their review.
Upon submission of a review, the component sends a POST request to the server to add the review to the database. If successful, the review is added to the list of reviews for the area.  

4. Navigation:  
Offers a "Back" button to navigate back to the previous page using the goBack method from the useHistory hook.
  
**Usage**  
The Area component is integrated into the CruxCraze application and is typically accessed when users click on a specific climbing area from the list of locations. It provides users with comprehensive information about the selected climbing spot and enables them to contribute their reviews and ratings.

**Key Points**  
Displays detailed information about a selected climbing area, including amenities and features.  
Allows users to add reviews for the area, contributing to the platform's community-driven content.  
Facilitates navigation through the application with a "Back" button for easy access to previous pages.  
  

**AreaContainer Component**  
The AreaContainer component renders a container for displaying summary information about a climbing area.

Usage:  

**AreaForm Component**  
The AreaForm component is used for adding a new climbing area to the application.  

Usage:  

**Authentication Component**  
The Authentication component handles user authentication and provides login and signup functionality.  

Usage:  

**EditReviewForm Component**  
The EditReviewForm component allows users to edit their existing reviews.  

Usage:  

**HomePage Component**  
The HomePage component serves as the landing page for the CruxCraze climbing application.  

Usage:  

**Locations Component**  
The Locations component displays a list of climbing areas available in the application.  

Usage:  

**Navigation Component**  
The Navigation component provides navigation links and user authentication controls.  

Usage:  

**NewReviewForm Component**  
The NewReviewForm component allows users to add a new review for a climbing area.  

Usage:  

**Profile Component**  
The Profile component displays user profile information.  

**Review Component**  
The Review component displays a single review for a climbing area.  

Usage:  

**ReviewsContainer Component**  
The ReviewsContainer component renders a list of reviews for climbing areas.  

Usage:  


**UserContext Component**  
The UserContext component provides user authentication state across the application.  

**App Component**  
The App component serves as the main entry point for the CruxCraze climbing application.