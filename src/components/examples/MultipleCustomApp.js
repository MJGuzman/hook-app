import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../useEffect/effects.css";

export const MultipleCustomApp = () => {
  const { counter, increment } = useCounter();

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-primary">loading</div>
      ) : (
        <div className="card mb-3">
          <div className="card-body">
            <figure className="text-start">
              <blockquote className="blockquote">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="sourcer title">{author}</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
      {!loading && (
        <button onClick={increment} className="btn btn-primary">
          Siguiente
        </button>
      )}
    </div>
  );
};
