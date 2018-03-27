import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      movies: initialMovies
    };

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState({ movies: newMovies });
  }

  render() {
    return (
      <div className="App">
        <Header text="Lukasz Reacteact Movie App!" />
        <p className="App-intro">
          Welcome to the react-movies app!
        </p>
        <div className="movies">
          {/*
          <Movie title="Tomb Raider" year="2018" description="Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams." poster="./posters/tomb_raider.jpg" />
          <Movie title="Dedpool 2" year="1986" description="A high school wise guy is determined to have a day off from school, despite what the principal thinks of that." poster="./posters/deadpool2.jpg" />
          <Movie title="Red Sparrow" year="1996" description="Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable." poster="./posters/red_sparrow.jpg" />
          <Movie title="Outsider" year="1987" description="Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle." poster="./posters/outsider.jpg" />
          */}
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>
      </div>
    );
  }
}

export default App;
