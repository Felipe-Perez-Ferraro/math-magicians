/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

function ApiCall() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = 'cGltlxSEokP4E0ug43o13g==0nAuSi7eMBVhj59K';
      const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

      try {
        const result = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const data = await result.json();
        setQuotes(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="calculator__quotes">
          <article className="quote__container">
            {quotes.map((quote, index) => (
              <div className="quote__feature__container" key={index}>
                <h2 className="calculator__quotes__title">
                  Author: {quote.author}
                </h2>
                <p className="calculator__quotes__category">
                  Category: {quote.category}
                </p>
                <p className="calculator__quotes__quote">
                  Quote: {quote.quote}
                </p>
              </div>
            ))}
          </article>
        </section>
      )}
    </>
  );
}

export default ApiCall;
