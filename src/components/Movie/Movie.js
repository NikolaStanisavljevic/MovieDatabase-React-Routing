import React from "react";
import "./Movie.css";

const movie = props => {
  let movie = <p style={{ textAlign: "center" }}>Something went wrong!</p>;

  if (!props.error) {
    movie = props.value.map(
      ({ overview, poster_path, backdrop_path, release_date, vote_average, title }) => {

        // Set inline style width for stars rating
        const precent = `${Math.round(vote_average) * 10}%`;
        const style = {
          width: `${precent}`
        };

        // Set month names instead of numbers
        const fullDate = release_date;
        const monthsArr = ['Januar','Februar','March','April','May','June','July','August','September','October','November','December'];
        const [day,month,year] = fullDate.split('-').reverse();
        const monthString = monthsArr[ month-1];
        const date = `${day} ${monthString} ${year}`; 

        //Set inline style for backdrop poster
        const backgroundUrl = {
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
        };

        return (
          <div className="content" key={title} style={backgroundUrl}>
            <div className="card">
              <div className="image">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + poster_path}
                  alt="poster"
                />
              </div>

              <div className="stats">
                <div className="title">
                  <h1>{title}</h1>
                </div>

                <div className="overview">
                  <h2>Overview:</h2>
                  <p>{overview}</p>
                </div>

                <div className="date">
                  <h2>Release date:</h2>
                  <div>{date}</div>
                </div>

                <div className="vote">
                  <h2>Rating:</h2>
                  <div className="outer">
                    <div className="iner" style={style} />
                  </div>
                  <p style={{ color: "white", marginTop: "10px" }}>{vote_average}</p>
                </div>

                <div className="add">
                  <button onClick={props.addMovie}>Add to collection</button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );

    return <div>{movie}</div>;
  }
};

export default movie;
