import React from 'react';
import Link from "next/link";

const NumbersCard = ({title, total, link, hasLink, bgCard, smallDetails}) => {
  return (
    <div className={`number-card ${ bgCard === '' ? ' bg-white ' : bgCard } `}>
      <div className="number-card--title">
        <span>{title}</span>
        {smallDetails !== '' ? (<small>{ smallDetails }</small>) : ''}
      </div>
      <div className="number-card--total">{total}</div>
      {
        hasLink ? (
          <Link href={link}>
            <span className="number-card-link">
              <span>See all</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="4.839" height="7.925" viewBox="0 0 4.839 7.925">
                  <path id="arrow" d="M3.965,2.731l.979-.981c.5-.5.991-1,1.49-1.489A.831.831,0,0,1,7.3.041.826.826,0,0,1,7.9.7a.842.842,0,0,1-.243.8q-.815.818-1.633,1.633-.72.72-1.443,1.443a.867.867,0,0,1-1.05.146.941.941,0,0,1-.19-.144Q1.8,3.043.264,1.5A.831.831,0,0,1,.048.611a.826.826,0,0,1,.7-.594.844.844,0,0,1,.766.255Q2.585,1.351,3.665,2.429C3.764,2.528,3.864,2.627,3.965,2.731Z" transform="translate(0 7.925) rotate(-90)"/>
                </svg>
              </span>
            </span>
          </Link>
        ) : ''
      }
      

    </div>
  );
}

export default NumbersCard;
