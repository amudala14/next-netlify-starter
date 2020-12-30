import React from 'react'
import Head from 'next/head'

import Aside from "../components/Aside/Aside"
import Footer from '../components/Footer/Footer'
import TopHead from '../components/Head/Head'
import PageTitle from '../components/PageTitle/PageTitle'

const Profile = () => {

  const notificationElem = {
    hasOptions: true,
    notificationDetails: {
      user: { image: '', hasNotification: true }
    },
  }

  const notifications =  [
      { title: 'Notification 1' },
      { title: 'Notification 2' },
      { title: 'Notification 3' },
      { title: 'Notification 4' }
    ]
  
  
  return (
    <div>
      <Head>
        <title>PABRA - Bean Enterprises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Aside linkActive='notifications' />
        <div className="main">
          <TopHead />
          <div className="wrapper-content">
            <div className="container">
              
              <PageTitle title="Notifications"  { ...notificationElem } />
              
              <div className="section-notifications">
                <div className="notifications-content">
                  <div className="notifications-group">
                    {
                      notifications.map((el, i) => (
                        <p className="notification" key={i} > { el.title }</p>
                      ))
                    }
                    
                  </div>
                </div>
              </div>
             
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile