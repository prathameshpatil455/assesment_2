import React from 'react';


const LandingPage = () => {
  const getGreeting = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const userName = 'Sam'; // Replace with the user's name

  return (
    <div className="landing-page">
      <h2>{getGreeting()}, Rescuer!</h2>
      <p>How are you doing today, {userName}?</p>

      <nav className="menu">
        <ul>
          <li>
            <a href="/NewTicketPage">Create New Ticket</a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
