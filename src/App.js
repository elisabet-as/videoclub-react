import React from 'react';
import { Switch, Route } from "react-router-dom";
import Movies from './Pages/Movies';
import Movie from './Pages/Movie';
import "./Styles/index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const response = await fetch("http://www.omdbapi.com/?apikey=f12ba140&s=movie");
    const result = await response.json();
    this.setState({
      movies: result.Search
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Movies movies={this.state.movies} />} />
          <Route path="/movie/:id" render={(props) => <Movie match={props.match} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
