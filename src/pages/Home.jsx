/* eslint-disable max-len */
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum porro officiis excepturi, est possimus hic, dolore inventore quia et mollitia dolores ad corrupti sed voluptas? Accusantium perspiciatis adipisci, incidunt quis quidem voluptatem ducimus nihil assumenda dolor, velit reiciendis, repellat illo nesciunt facere libero ex totam eum saepe inventore commodi.
          </p>
          <p style={styles.home__paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum porro officiis excepturi, est possimus hic, dolore inventore quia et mollitia dolores.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Home;
