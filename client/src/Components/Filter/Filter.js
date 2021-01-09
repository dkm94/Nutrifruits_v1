import React from "react";
import Cards from "../Card/Cards";
import sort from "../../img/iconsFilter.png";
import SearchBar from "../SearchBar/SearchBar";

import "../Filter/filter.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      value: "",
    };
  }

  componentDidMount() {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ fruits: data });
      })
      .then((sort) => {
        sort = this.state.fruits;
        sort = sort.sort((a, b) => (a.name > b.name) ? 1 : -1)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  ascProteins = () => {
    const fruits = this.state.fruits;
    fruits.sort(function (a, b) {
      return a.nutritions.protein - b.nutritions.protein;
    });
    this.setState({ ...[fruits] });
  };

  ascFat = () => {
    const fruits = this.state.fruits;
    fruits.sort(function (a, b) {
      return a.nutritions.fat - b.nutritions.fat;
    });
    this.setState({ fruits });
  };

  ascCalories = () => {
    const fruits = this.state.fruits;
    fruits.sort(function (a, b) {
      return a.nutritions.calories - b.nutritions.calories;
    });
    this.setState({ fruits });
  };

  ascSugar = () => {
    const fruits = this.state.fruits;
    fruits.sort(function (a, b) {
      return a.nutritions.sugar - b.nutritions.sugar;
    });
    this.setState({ fruits });
  };

  inputValue = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div className="filter">
          <div className="sort">
            <img alt="trier" src={sort} />
            <h1>Sort in ascending order :</h1>
          </div>

          <div className="inputFilter">
            <div className="inputContainer">
              <label>
                <input
                  type="radio"
                  className="option-input radio"
                  name="example"
                  onClick={this.ascProteins}
                />
                Proteins
              </label>
            </div>

            <div className="inputContainer">
              <label>
                <input
                  type="radio"
                  className="option-input radio"
                  name="example"
                  onClick={this.ascFat}
                />
                Fat
              </label>
            </div>

            <div className="inputContainer">
              <label>
                <input
                  type="radio"
                  className="option-input radio"
                  name="example"
                  onClick={this.ascCalories}
                />
                Calories
              </label>
            </div>

            <div className="inputContainer">
              <label>
                <input
                  type="radio"
                  className="option-input radio"
                  name="example"
                  onClick={this.ascSugar}
                />
                Sugar
              </label>
            </div>
          </div>
        </div>

        <SearchBar
          className="search__input"
          type="text"
          placeholder="Search your fruit"
          name="searchbar"
          onChange={this.inputValue}
          // value={this.state.value}
        />

        <Cards fruits={this.state.fruits} value={this.state.value} />
      </>
    );
  }
}
export default Filter;
