#  NirogGyan Healthcare Appointment Booking App

A responsive, single-page React application built to simplify healthcare appointment booking. Users can explore doctors, view detailed profiles, and book appointments — all from one intuitive interface.

---

##  Tools & Libraries Used

| Technology       | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| **React**        | Frontend library for building component-based UIs                       |
| **React Router** | Client-side routing between pages like Home, About, Contact, etc.       |
| **CSS**          | Styling for layout and responsiveness                                   |
| **React Modal**  | Modal component for booking form pop-ups                                |
| **Mock Data**    | Mock backend to simulate real API responses                             |


---

##  Key Features

-   **Multi-Page Routing**:  
    Seamless navigation using React Router across multiple routes:
    - `/` → Home  
    - `/about` → About Us  
    - `/appointments` → Your Appointments  
    - `/contact` → Contact Us  
    - `/doctor/:id` → Doctor Profile (dynamic route for viewing a specific doctor's details)

-  **Search & Filter**:
    - Search by **name** or **specialization**
    - Filter doctors by **location** and **gender**

-  **Dynamic Time Slots**:
    - Available time slots are generated dynamically based on selected day and doctor availability.

-  **Modal Form for Booking**:  
    - Pop-up modal displays a form to book appointments.
    - Includes form validation (e.g., 10-digit mobile number).

-  **Responsive Design**:
    - Fully responsive layout for both **mobile** and **desktop** views.
      
-  **State Sharing via Context API**  
    - React Context is used for global booking data management to avoid prop drilling and maintain a consistent booking state across components.

- **Appointment History**  
    - Users can view a history of all their booked appointments. This helps them keep track of upcoming consultations.

---

## Improvements with More Time

1. **Authentication & User Login System:**
   - Implement a secure login and signup flow using authentication providers (e.g., Firebase Auth or JWT-based authentication) so that users can view and manage their bookings in a personalized way.

2. **Persisting Data with Local Storage or State Management:**
   - Use localStorage or sessionStorage to preserve booking data across refreshes or accidental tab closures.
   - Alternatively, integrate state management tools like Redux or Zustand for more scalable data handling.

3. **Backend API Integration:**
   - Replace the mock data with a real backend using Node.js and Express (or another stack) for storing doctor data, appointments, and user details persistently in a database like MongoDB or PostgreSQL.

4. **Doctor Reviews and Ratings:**
   - Allow users to leave reviews and rate doctors after appointments.
   - This helps other users make informed decisions and adds credibility to the platform.


## Challenges Faced & Solutions

1. **Dynamic Display of Available Time Slots:**
   - **Challenge:** Needed to dynamically show time slots only after a day was selected for a doctor.
   - **Solution:** Implemented a conditional rendering logic that displays time slots based on the selected day from the doctor's availability schedule.

2. **Sharing Booking Data Across Components:**
   - **Challenge:** Booking information needed to be accessible in multiple components (e.g., confirmation screen, "Your Appointments" page) without excessive prop drilling.
   - **Solution:** Introduced a `BookingContext` using React Context API to store and access booking data globally throughout the app.

3. **Responsive Design Across Devices:**
   - **Challenge:** Ensuring the UI looked clean and usable across various breakpoints like mobile, tablet, and desktop.
   - **Solution:** Used flexible layout strategies with CSS (like flexbox and media queries) to build a responsive interface that adapts to different screen sizes.

4. **Modal Accessibility and Behavior:**
   - **Challenge:** Ensuring the modal was accessible and properly focused without affecting the main content view.
   - **Solution:** Used `react-modal`'s `setAppElement()` properly with the main container element to hide background content from screen readers and avoid initial scroll issues.

5. **Form Validation and User Feedback:**
   - **Challenge:** Needed proper validation for fields like mobile number and time slot selection.
   - **Solution:** Applied HTML `required` attributes, regex validation (e.g., for 10-digit mobile numbers), and conditionally disabled the "Book Now" button until valid inputs were provided.

6. **Handling Route Navigation Smoothly:**
   - **Challenge:** Implementing clean routing between dynamic and static pages (e.g., doctor profile `/doctor/:id` and static pages like About/Contact).
   - **Solution:** Used `react-router-dom` for defining routes and linking, ensuring each component renders efficiently based on the path.



---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/niroggyan-healthcare-app.git
