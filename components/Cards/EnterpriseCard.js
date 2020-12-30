import React from 'react'

const EnterpriseCard = ({name, country, network, owner, imgPath}) => {
  return (
    <div className="enterprise-item">
      <div className="enterprice-image-holder">
        <img src={ imgPath !== '' ? imggPath : "/assets/images/image-placeholder.jpg"} alt=""/>
      </div>
      <div className="enterprise-details">
        <p>
          <span>Name:</span>
          <span>{name}</span>
        </p>
        <p>
          <span>Country:</span>
          <span>{country}</span>
        </p>
        <p>
          <span>Network:</span>
          <span>{network}</span>
        </p>
        <p>
          <span>How is the business owned: </span>
          <span>{owner}</span>
        </p>
      </div>
    </div>
  )
}

export default EnterpriseCard
