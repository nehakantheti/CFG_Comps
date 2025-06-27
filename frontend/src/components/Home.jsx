import React from 'react';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center',
    },
    welcomeText: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>

      {/* Main Content */}
      <main style={styles.main}>
        <div>
          <h1 style={styles.welcomeText}>Welcome to the Dashboard</h1>
          <p>Your central hub for managing volunteer activities</p>
        </div>
      </main>

    </div>
  );
};

export default Home;
