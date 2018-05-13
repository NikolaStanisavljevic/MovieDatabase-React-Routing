import React from "react";
import "./Movie.css";

const movie = props => {
  let movie = <p style={{ textAlign: "center" }}>Something went wrong!</p>;

  if (!props.error) {
    movie = props.value.map(
      ({ overview, poster_path, backdrop_path, release_date, vote_average, title }) => {
        const precent = `${Math.round(vote_average) * 10}%`;
        const date = release_date
          .split("-")
          .reverse()
          .map((month, index) => {
            if (index === 1) {
              switch (month) {
                case "01":
                  month = "January";
                  break;
                case "02":
                  month = "February";
                  break;
                case "03":
                  month = "March";
                  break;
                case "04":
                  month = "April";
                  break;
                case "05":
                  month = "May";
                  break;
                case "06":
                  month = "June";
                  break;
                case "07":
                  month = "July";
                  break;
                case "08":
                  month = "Avgust";
                  break;
                case "09":
                  month = "Septembar";
                  break;
                case "10":
                  month = "October";
                  break;
                case "11":
                  month = "November";
                  break;
                case "12":
                  month = "December";
                  break;
                default:
                  month = "Month name";
              }
            }
            return <div key={index}> {month} </div>;
          });

        const style = {
          width: `${precent}`
        };

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
