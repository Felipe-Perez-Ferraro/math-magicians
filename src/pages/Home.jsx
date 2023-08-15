import React from 'react';

function Home() {
  const styles = {
    home__section: {
      height: 'calc(100vh - 70px)',
      backgroundColor: 'var(--primary-color)',
    },
    home__container: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    home__features__container: {
      paddingTop: '50px',
    },
    home__title: {
      fontSize: '30px',
      color: 'var(--quaternary-color)',
    },
    home__paragraph: {
      fontWeight: '500',
      color: 'var(--tertiary-color)',
    },
  };

  return (
    <section style={styles.home__section}>
      <article style={styles.home__container}>
        <div style={styles.home__features__container}>
          <h1 style={styles.home__title}>
            Welcome to our page!
          </h1>
          <p style={styles.home__paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum porro officiis ex.
          </p>
          <p style={styles.home__paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum porro officiis ex.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Home;
