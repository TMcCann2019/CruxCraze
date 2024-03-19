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

*Overview*  
The Area component functions as follows:

1. Data Retrieval:  
- It retrieves the list of climbing areas and the current user's information from the application's state.
- Utilizes the useHistory and useParams hooks from React Router to manage navigation and access URL parameters.

2. Area Information Display:  
- Renders detailed information about the selected climbing area, including its name, difficulty level, address, and various amenities such as gear requirements, retail shops, fitness areas, and climbing features like lead climbing, bouldering, moon boards, and kilter boards.  

3. Review Management:  
- Provides functionality for users to add reviews for the climbing area.
- When the "Add Review" button is clicked, it displays a form (NewReviewForm) allowing users to input their rating, comment, and the date of their review.
- Upon submission of a review, the component sends a POST request to the server to add the review to the database. If successful, the review is added to the list of reviews for the area.  

4. Navigation:  
- Offers a "Back" button to navigate back to the previous page using the goBack method from the useHistory hook.
  
*Usage*  
The Area component is integrated into the CruxCraze application and is typically accessed when users click on a specific climbing area from the list of locations. It provides users with comprehensive information about the selected climbing spot and enables them to contribute their reviews and ratings.

*Key Points*  
- Displays detailed information about a selected climbing area, including amenities and features.  
- Allows users to add reviews for the area, contributing to the platform's community-driven content.  
- Facilitates navigation through the application with a "Back" button for easy access to previous pages.  
  

**AreaContainer Component**  
The AreaContainer component renders a container for displaying summary information about a climbing area.

*Overview*  
The AreaContainer component works as follows:  

1. Basic Information Display:  
    Displays fundamental details about the climbing area and provides a brief overview of the area to users, enabling them to identify areas of interest at a glance.  

2. Navigation:  
    Implements navigation using useHistory hook from React Router and when the user clicks the "View Details" button, it redirects them to the detailed view of the corresponding area
  
*Usage*   
The AreaContainer component is utilized within the CruxCraze application to showcase a list of climbing areas. It serves as a clickable item that users can interact with to view additional details about specific climbing locations.  

*Key Points:* 
- Presents essential information about the climbing area in a condensed format.  
- Provides navigation functionality to enable users to access detailed information about the area.  
-  Offers a streamlined user experience by allowing users to quickly browse through available locations.  

**AreaForm Component**  
The AreaForm component in the CruxCraze application serves as a user interface for adding new climbing areas to the platform. It provides a form where users can input various details about the climbing area, such as its name, location, difficulty level, amenities, and more. Upon submission, the form data is validated and sent to the server to be stored in the database.

*Overview*  
The AreaForm component facilitates the following tasks:

1. Input Validation:  
- Utilizes Yup schema validation to ensure that all required fields are provided and that data types match the expected format.
- Validates fields such as name, location (city, state, postal code, latitude, longitude), difficulty, clip rating, and boolean options for amenities.

2. Form Submission:  
- Handles form submission by invoking the addAreaToList function passed as a prop.
- Upon submission, the form data is sent to the server to be added to the list of climbing areas.

3. Dynamic User Interface:  
- Renders input fields for various attributes of a climbing area, including text inputs, number inputs, and checkboxes.
- Adapts the form layout to accommodate different types of data, ensuring a user-friendly experience.  

*Usage*  
The AreaForm component is utilized within the CruxCraze application whenever users want to contribute new climbing areas to the platform. It presents users with a structured form where they can input detailed information about the climbing area they wish to add.

*Key Points*  
- Provides a structured form interface for adding new climbing areas.
- Validates user input to ensure data integrity and consistency.
- Offers dynamic input fields to accommodate different types of climbing area attributes.
- Facilitates seamless submission of climbing area data to the server for storage and retrieval.  

**Authentication Component**  
The Authentication component in the CruxCraze application facilitates user authentication processes, allowing users to sign up for a new account or log in to an existing one. It serves as the entry point for users to access the platform's features and functionalities securely.  

*Overview*  
The Authentication component performs the following tasks:  

1. User Authentication:  
- Enables users to either log in with existing credentials or sign up for a new account.
- Validates user input using Yup schema validation to ensure that required fields such as email and password are provided.
- Handles form submission by sending requests to the server endpoints (/login or /signup) based on the user's action (login or sign up).

2. Dynamic UI Rendering:  
- Dynamically renders the login or sign-up form based on the current state (signUp).
- Toggles between login and sign-up modes when users click the "Log In" or "Sign Up" buttons, respectively.

3. Error Handling:  
- Displays error messages in red text if validation errors occur during form submission, providing feedback to users about any missing or incorrect input.  

*Usage*  
The Authentication component is utilized within the CruxCraze application to manage user authentication processes. It serves as the initial interaction point for users to access the platform securely by logging in or signing up for a new account.

*Key Points*  
- Provides user authentication functionality, allowing users to log in or sign up for a new account.
- Utilizes Yup schema validation to ensure the integrity of user input data.
- Offers a dynamic user interface that adapts based on user actions, providing a seamless authentication experience. 

**EditReviewForm Component**  
The EditReviewForm component in the CruxCraze application serves as a user interface for editing existing reviews. It provides a form where users can modify the rating, comment, and date of a review. Additionally, it includes functionality for clearing the form, confirming the submission of changes, and handling form validation.

*Overview*  
The EditReviewForm component facilitates the following tasks:

1. Input Validation:  
- Utilizes Yup schema validation to ensure that all required fields are provided and that data types match the expected format.
- Validates fields such as rating (numeric), comment (string), and date (date format).

2. Form Submission:  
- Handles form submission by invoking the handleSubmit function passed as a prop.
- Upon submission, the updated review data is sent to the server to be updated in the database.

3. Confirmation Dialog:  
- Displays a confirmation dialog when the user clicks the "Confirm" button.
- Allows users to confirm or cancel the submission of the review changes.

4. Dynamic User Interface:  
- Renders input fields for editing the rating, comment, and date of the review.
- Provides buttons for submitting changes, clearing the form, and confirming the submission.

*Usage*  
The EditReviewForm component is utilized within the CruxCraze application whenever users wish to modify an existing review. It presents users with a structured form interface where they can edit the review details and confirm their changes before submission.

*Key Points*  
- Provides a structured form interface for editing existing reviews.
- Validates user input to ensure data integrity and consistency.
- Offers functionality for confirming the submission of review changes.
- Facilitates seamless submission of updated review data to the server for storage and retrieval. 

**HomePage Component**  
The HomePage component in the CruxCraze application serves as the landing page for users visiting the platform. It provides a visually appealing layout with sections aimed at engaging users and encouraging them to explore climbing areas, sign up for an account, and join the CruxCraze community.

*Overview*  
The HomePage component includes the following sections:

1. HeroSection:  
- Presents users with a captivating heading and subheading, inviting them to discover their next climbing adventure.
- Includes a prominent "Explore Climbing Areas" button that redirects users to the locations page where they can explore various climbing spots.

2. CTASection:  
- Encourages users to join CruxCraze by signing up for an account.
- Provides a brief description of the benefits of joining, such as exploring climbing areas, sharing climbing experiences, and connecting with fellow climbers.
- Offers a "Sign Up" button that directs users to the authentication page to create an account.

*Usage*  
The HomePage component serves as the initial page users encounter when accessing the CruxCraze application. It aims to attract users' attention, communicate the platform's value proposition, and encourage them to take action by exploring climbing areas or signing up for an account.

*Key Points*  
- Presents a visually appealing layout with engaging content to captivate users.
- Includes clear call-to-action buttons to direct users to relevant sections of the application.
- Highlights the benefits of joining CruxCraze, such as exploring climbing areas and connecting with other climbers.
- Provides a seamless user experience with intuitive navigation options and compelling visuals.  

**Locations Component**  
The Locations component in the CruxCraze application serves as a page where users can explore and discover various climbing areas. It provides users with a list of available locations and a map visualization powered by Mapbox, enhancing their browsing experience and helping them find climbing spots of interest.

*Overview*  
The Locations component consists of the following key elements:

1. Map Visualization:  
- Utilizes the Mapbox API to render an interactive map displaying the geographical locations of climbing areas.
- Integrates with Mapbox's styling options to provide users with a visually appealing map interface.
- Allows users to pan, zoom, and explore different regions directly on the map.

2. Locations List:  
- Presents users with a list of climbing areas available on the platform.
- Each item in the list includes essential details about the climbing area, such as name, difficulty level, and address.
- Users can quickly scan through the list to identify areas of interest and navigate to specific locations.

*Usage*  
The Locations component serves as a central hub for users to explore the various climbing areas available on the CruxCraze platform. Users can interact with the map to visualize the geographic distribution of climbing spots and simultaneously browse through the list to view detailed information about each area.

*Key Points*  
- Integrates with Mapbox to provide an interactive map visualization of climbing areas.
- Enhances user experience by offering both visual and textual representations of location data.
- Allows users to seamlessly transition between the map view and the list view for convenient exploration.
- Provides essential details about each climbing area, enabling users to make informed decisions about which locations to explore further. 

**Navigation Component**  
The Navigation component in the CruxCraze application serves as a navigation bar that allows users to navigate between different sections of the website. It provides convenient links to essential pages such as the home page, about page, locations, area form for adding new climbing areas, authentication for login, profile page, and a logout button for user session management.

*Overview*  
The Navigation component consists of the following key elements:

1. Navigation Links:  
- Provides links to essential sections of the website, including the home page, about page, locations, area form for adding new climbing areas, authentication for login, and profile page.
- Each link directs users to a specific page within the application, facilitating easy navigation and exploration.

2. Logout Button:  
- Allows authenticated users to log out of their accounts and terminate their current session.
- Upon clicking the logout button, the component triggers a logout request to the server, effectively ending the user's session and redirecting them to the home page.

*Usage*  
The Navigation component is present on every page of the CruxCraze application, ensuring consistent navigation across the website. Users can access different sections of the platform by clicking on the provided links in the navigation bar. Additionally, authenticated users have the option to log out of their accounts using the logout button.

*Key Points*  
- Provides a centralized navigation system for seamless movement between different sections of the application.
- Enhances user experience with clear and intuitive navigation links.
- Supports user authentication and session management with the inclusion of a logout button.
- Improves accessibility and usability by ensuring consistent navigation elements across all pages of the website.  

**NewReviewForm Component**  
The NewReviewForm component in the CruxCraze application allows users to submit new reviews for climbing areas. It provides a form where users can input their ratings, comments, and the date of their review. Additionally, the component includes validation to ensure that users provide all necessary information before submitting their review.

*Overview*  
The NewReviewForm component consists of the following key elements:

1. Form Fields:  
- Provides input fields for users to enter their ratings, comments, and the date of their review.
- Ensures that users provide all required information through form validation to maintain data integrity.

2. Form Submission:  
- Allows users to submit their reviews by clicking the submit button.
- Upon submission, the component triggers a confirmation dialog to confirm the user's intention to submit the review.

3. Confirmation Dialog:  
- Displays a confirmation dialog to ensure that users are certain about submitting their review.
- Users can choose to proceed with the submission or cancel the operation.

*Usage*  
The NewReviewForm component is typically rendered within the CruxCraze application when users want to add a new review for a specific climbing area. Users interact with the form by inputting their ratings, comments, and the date of their review. Upon completion, users can submit their review, triggering a confirmation dialog to confirm their action.

*Key Points*  
- Facilitates the submission of new reviews for climbing areas within the CruxCraze platform.
- Implements form validation to ensure that users provide all necessary information before submitting their review.
- Enhances user experience with a confirmation dialog to confirm the submission of the review.
- Supports seamless integration with other components and functionalities within the application, such as navigation and review management.  

**Profile Component**  
The Profile component in the CruxCraze application provides users with information about their profile. It displays details such as the user's name, email address, and the number of reviews they have submitted. This component leverages the UserContext to access the user's information, enhancing personalization and user experience within the application. 

**Review Component**  
The Review component in the CruxCraze application is responsible for displaying individual reviews submitted by users. It provides users with the ability to view, edit, and delete their reviews within the application. This component enhances user engagement and facilitates interaction with review content, contributing to a richer user experience.

*Overview*  
The Review component consists of the following key elements:

1. Review Content:  
- Displays the title, comment, rating, and date of the review.
- Provides users with information about the specific details of the review, enabling them to make informed decisions.

2. Edit and Delete Functionality:  
- Allows users to edit or delete their reviews.
- Enhances user control and flexibility over their submitted reviews, empowering them to modify or remove content as needed.

*Usage*  
The Review component is utilized within the CruxCraze application to present individual reviews submitted by users. Users can interact with each review by viewing its content, editing it, or deleting it. This component fosters user engagement and participation by providing easy access to review-related functionalities, thereby contributing to a dynamic and interactive user experience.

*Key Points*  
- Displays individual reviews submitted by users, including title, comment, rating, and date.
- Offers users the ability to edit or delete their reviews, providing control and flexibility over review content.
- Seamlessly integrates with other components and functionalities within the application to deliver a cohesive user experience.
- Enhances user engagement and interaction by facilitating easy access to review-related actions and functionalities. 

**ReviewsContainer Component**  
The ReviewsContainer component in the CruxCraze application is responsible for managing and displaying a collection of reviews. It fetches reviews from the backend server, provides functionality to delete reviews, and updates reviews when modifications are made. This component serves as a centralized container for organizing and rendering multiple reviews within the application.

*Overview*  
The ReviewsContainer component consists of the following key functionalities:

1. Fetching Reviews:  
- Utilizes an HTTP request to fetch reviews from the backend server upon component initialization.
- Retrieves review data asynchronously and updates the component's state with the fetched reviews.

2. Displaying Reviews:  
- Renders each review retrieved from the backend server using the Review component.
- Iterates over the collection of reviews and dynamically generates individual Review components for each review.

3. Review Management:  
- Provides functionality to delete individual reviews.
- Updates the list of reviews displayed in the container upon successful deletion of a review.

4. Review Update:  
- Allows for the modification of reviews within the container.
Updates the list of reviews when modifications, such as edits or updates, are made to individual reviews.

*Usage*  
The ReviewsContainer component is integrated into the CruxCraze application to manage and display a collection of reviews submitted by users. It fetches reviews from the backend server, presents them to users, and facilitates interactions such as deletion and modification of reviews. By organizing and rendering reviews within a centralized container, this component enhances the usability and functionality of the application's review system.

*Key Points*  
- Fetches reviews from the backend server and updates the component's state with the retrieved data.
- Dynamically renders individual reviews using the Review component based on the fetched review data.
- Provides functionality to delete reviews, updating the list of displayed reviews accordingly.
- Supports review updates, allowing for modifications to individual reviews within the container.
- Enhances the user experience by presenting reviews in an organized and interactive manner, fostering engagement and participation.

**UserContext Component**  
The UserContext component provides user authentication state across the application.  

**App Component**  
The App component serves as the main entry point for the CruxCraze climbing application.