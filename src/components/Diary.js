import React from 'react';
import FoodAdder from './FoodAdder';
import './styles/Diary.css';

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [],
      calorieTotal: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (food, calories) => {
    let calorieTotal = 0;
    let newList = this.state.foodList.slice();
    newList.push({ food, calories });
    // we're getting the total calories now
    newList.forEach((entry) => {
      console.log(typeof (entry.calories));
      calorieTotal = calorieTotal + parseInt(entry.calories);
    });
    this.setState({
      foodList: newList,
      calorieTotal
    });
  }

  render() {
    return (
      <div className="diary">
        <div className="calories">
          <h2>Calories: {this.state.calorieTotal}</h2>
          <ul className="calories__list">
            {this.state.foodList.map((food, i) => {
              return (
                <li key={i} >{food.food} - {food.calories}</li>
              )
            })}
          </ul>
        </div>
        <FoodAdder handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Diary;