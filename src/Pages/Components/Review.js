import React from 'react';
import "./Review.css"
import Count from "./Count";

const Review = () => {
  return (
    <section className="statistics" data-aos="fade-right">
      <h2 className="text-center">Services Information in Numbers</h2>
      <p className="text-center">Some Statistics</p>
      <ul className="statistics-list">
        <li className="statistics-item">
          <i class="far fa-thumbs-up"></i>
          <h4>
            <Count end="100" suffix="%"></Count>
          </h4>
          <p>Quality</p>
        </li>
        <li className="statistics-item">
          <i class="fas fa-user-injured"></i>
          <h4>
            <Count end="3500"></Count>
          </h4>
          <p>Customers in a year</p>
        </li>
        <li className="statistics-item">
          <i class="fas fa-user-friends"></i>
          <h4>
            <Count end="250"></Count>
          </h4>
          <p>Working People</p>
        </li>
        <li className="statistics-item">
          <i class="fas fa-calendar-week"></i>
          <h4>
            <Count end="7"></Count>
          </h4>
          <p>Years of Experience</p>
        </li>
        <li className="statistics-item">
          <i class="far fa-smile-beam"></i>
          <h4>
            <Count end="15000"></Count>
          </h4>
          <p>Happy Customers</p>
        </li>
      </ul>
    </section>
  );
};

export default Review;