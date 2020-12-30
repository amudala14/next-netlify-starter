import React from 'react'
import Head from 'next/head'

import Aside from "../components/Aside/Aside"
import Footer from '../components/Footer/Footer'
import TopHead from '../components/Head/Head'
import PageTitle from '../components/PageTitle/PageTitle'
import NumbersCard from '../components/Cards/NumbersCard'

const Profile = () => {
  const NumbersCardsElem = {
    smallCards: [
      { title: 'Members', 'smallDetails':'', total: 200, link: '#', 'bgCard': 'bg-primary' , hasLink: false},
      { title: 'Male members', 'smallDetails':'', total: 120, link: '#', 'bgCard': 'bg-secondary', hasLink: false },
      { title: 'Female members', 'smallDetails':'', total: 80, link: '#', 'bgCard': 'bg-tertiary', hasLink: false },
      { title: 'Members under 35', 'smallDetails':'', total: '80%', link: '#', 'bgCard': 'bg-dark', hasLink: false },
      { title: 'Members over 35', 'smallDetails':'', total: '20%', link: '#', 'bgCard': 'bg-dark-1', hasLink: false },
    ]
  }
  return (
    <div>
      <Head>
        <title>PABRA - Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Aside linkActive='production' />
        <div className="main">
          <TopHead />
          <div className="wrapper-content">
            <div className="container">
              
              <PageTitle title="KAFLOBE PROFILE"/>

              <div className="main-profile">
                <span>KAFLOBE</span>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              </div>

              <div className="section-profile-information">
                <div className="details">
                  <div>
                    <h3>Owner’s information</h3>
                    <div className="details-group">
                      <div className="details-properties">
                          <span>Owner’s Name:</span>
                          <span>Owner’s Gender:</span>
                          <span>Owner’s Age group:</span>
                      </div>
                      <div className="details-values">
                        <span>Osias nkurunziza</span>
                        <span>Male</span>
                        <span> > 35 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-30">
                    <div className="details">
                      <h3>Location information</h3>
                      <div className="details-group">
                        <div className="details-properties">
                          <span>Country:</span>
                          <span>Province:</span>
                          <span>Commune/District:</span>
                        </div>
                        <div className="details-values">
                            <span>Burundi</span>
                            <span>Bujumbura Mairie</span>
                            <span> Mukaza</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details">
                  <h3>Product information</h3>
                  <div className="details-group">
                    <div className="details-properties">
                      <span>Ward/Colline /Sector/Subcounty:</span>
                      <span>last month process bean varieties:</span>
                      <span>Date:</span>
                      <span>Year</span>
                      <span>Quantity sold grain:</span>
                      <span>Price grain:</span>
                      <span>Quantity sold precookedbean:</span>
                      <span>Price precookedbean:</span>
                      <span>quantity sold compositeflour:</span>
                      <span>Price compositeflour:</span>
                    </div>
                    <div className="details-values">
                      <span>Rohero</span>
                      <span>2</span>
                      <span>8/30/2019</span>
                      <span>2019</span>
                      <span>5000</span>
                      <span>450</span>
                      <span>400</span>
                      <span>1500</span>
                      <span>1500</span>
                      <span>3000</span>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="section-profile">
                <div className="cards-group">
                {
                  NumbersCardsElem.smallCards.map((el, i) => (
                    <NumbersCard {...el} key={i} />
                  ))
                  } 
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