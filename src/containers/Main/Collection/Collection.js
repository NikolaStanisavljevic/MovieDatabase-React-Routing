import React, { Component } from "react";
import "./Collection.css";
import NavBar from "../../../components/Navbar/Navbar";

export class Collection extends Component {
  render() {
    return (
      <div>
        <NavBar toggle={this.props.toggle} isOpen={this.props.isOpen} />
        <div className="collections">
          {this.props.movies.map(([{ poster_path }], index) => {
            return (
              <div className="collection" key={index}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + poster_path}
                  alt="poster"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
