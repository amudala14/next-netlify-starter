import React from 'react'

function PageTitle({title, notificationDetails, hasOptions}) {
  return (
    <div className={`page-title-container ${ hasOptions ? ' mt--15 ' : '' } `}>
      <h1 className="page-title">{title}</h1>
      {
        hasOptions ? (
          <div className="page-title-notification--containts">
            <span className={`page-title--notification ${ notificationDetails.user.hasNotification ? 'has-notification ' : ''} `}>
                <img height="26" src="/assets/images/ring.svg" alt=""/>
            </span>
            <div className="user-profile-details">
              <div className="img-holder">
                <img src="/assets/images/img-profile.png" alt=""/>
              </div>
              <img height="8" src="/assets/images/arrow-down.svg" alt=""/>
            </div>
          </div>
        ) : ""
      }
      
    </div>
  )
}

export default PageTitle
