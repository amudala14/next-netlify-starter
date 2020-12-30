import React from 'react';

const StatisticsCard = () => {
  return (
    <div className="statistic-card">
      <div className="statistic-card__head">
        <div className="statistic-card--title">ALL PABRA COUNTRIES</div>
        <div className="statistic-card--filter">
          <span>ECABREN</span>
          <img src="/assets/images/filter.svg" alt=""/>

        </div>
      </div>
      <div className="statistic-card--details">
        <div className="statistic-card--details__graph">
            <img src="/assets/images/Group 393.svg" alt=""/>
        </div>
        <div className="statistic-card--details__numbers">
          <h1>31</h1>
          <h3>Total Countries</h3>
          <div className="numbers">
            <span className="numbe--row">
              <span className="area bg-primary"></span>
              <span>Countries Members of PABRA</span>
            </span>
            <span className="numbe--row">
              <span className="area bg-tertiary"></span>
              <span>Countries Non Members of PABRA</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard;
