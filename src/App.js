import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchCurrentUser, toggleHamburger } from "./redux/actions/index";
import Home from "./components/home/Home.component";
import Navbar from "./components/Navbar/Navbar";
import ScrollIntoView from "./components/ScrollIntoView.component";
import Footer from "./components/Footer/Footer.component";
import AddToHome from "./components/AddToHome/AddToHome.component";
import Modal from "./components/Modal/Modal.component";

const App = ({
  theme,
  fetchCurrentUser,
  toggleHamburger,
  setToggleHamburger,
}) => {
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  const handleOnClick = () => {
    if (toggleHamburger) {
      setToggleHamburger();
    }
  };

  const ShowMovie = lazy(() =>
    import("./components/showMovie/ShowMovie.component")
  );
  const Movies = lazy(() => import("./components/Movies/Movies.component"));
  const TvShows = lazy(() => import("./components/TvShows/TvShows.component"));
  const MovieListSearch = lazy(() =>
    import("./components/MovieListSearch/MovieListSearch")
  );
  const AdvancedSearch = lazy(() =>
    import("./components/AdvancedSearch/AdvancedSearch.component")
  );
  const PopularActors = lazy(() =>
    import("./components/PopularActors/PopularActors.component")
  );
  const ActorMovies = lazy(() =>
    import("./components/ActorMovies/ActorMovies.component")
  );
  const Customize = lazy(() =>
    import("./components/Customize/Customize.component")
  );
  const Film = lazy(() => import("./components/spinners/Film/Film.component"));
  const SavedMovies = lazy(() =>
    import("./components/savedMovies/SavedMovies.component")
  );
  return (
    <div onClick={handleOnClick} id="app" className={theme}>
      <Router>
        <AddToHome />
        <ScrollIntoView>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movie/:id" component={ShowMovie} />
              <Route path="/movies/:category/page/:page" component={Movies} />
              <Route path="/tv/:category/page/:page" component={TvShows} />
              <Route
                path="/search/:query/page/:page"
                component={MovieListSearch}
              />
              <Route exact path="/advanced-search" component={AdvancedSearch} />
              <Route
                path="/advanced-search/:query/page/:page"
                component={MovieListSearch}
              />
              <Route path="/popular-actors/:query" component={PopularActors} />
              <Route path="/actors/:query/page/:page" component={ActorMovies} />
              <Route exact path="/customize" component={Customize} />
              <Route exact path="/spinner/" component={Film} />
              <Route exact path="/savedmovies" component={SavedMovies} />
            </Switch>
          </Suspense>
        </ScrollIntoView>
      </Router>
      <Footer></Footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.displayTheme,
  toggleHamburger: state.toggleHamburger,
});

export default connect(mapStateToProps, {
  fetchCurrentUser: fetchCurrentUser,
  setToggleHamburger: toggleHamburger,
})(App);
