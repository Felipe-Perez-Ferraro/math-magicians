import React from 'react';

function Loading() {
  const styles = {
    loading__section: {
      height: 'calc(100vh - 70px)',
      backgroundColor: 'var(--primary-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loading__title: {
      color: 'var(--secondary-color)',
      fontSize: '22px',
    },
  };

  return (
    <section style={styles.loading__section}>
      <h2 style={styles.loading__title}>Loading Quote...</h2>
    </section>
  );
}

export default Loading;
