import React from 'react'
import Head from 'next/head'

import Aside from "../components/Aside/Aside"
import Footer from '../components/Footer/Footer'
import TopHead from '../components/Head/Head'
import PageTitle from '../components/PageTitle/PageTitle'
import NumbersCard from '../components/Cards/NumbersCard'
import StatisticsCard from '../components/Cards/HugeStatisticsCard'

const home = () => {
  const NumbersCardsElem = {
    smallCards: [
      { title: 'PABRA Networks', 'smallDetails':'', total: 3, link: '#', 'bgCard': '' , hasLink: true},
      { title: 'Bean Corridors', 'smallDetails':'', total: 9, link: '#', 'bgCard': '', hasLink: true },
      { title: 'Countries', 'smallDetails':'', total: 31, link: '#', 'bgCard': '', hasLink: true },
      { title: 'Private Sector Partners/SMEs', 'smallDetails':'', total: 184, link: '#', 'bgCard': '', hasLink: true },
      { title: 'NGO partners', 'smallDetails':'', total: 135, link: '#', 'bgCard': '', hasLink: true },
      { title: 'Government and public sector partners', 'smallDetails':'', total: 22, link: '#', 'bgCard': '', hasLink: true }
    ]
  }
  return (
    <div>
      <Head>
        <title>PABRA - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Aside linkActive='home' />
        <div className="main">
          <TopHead />
          <div className="wrapper-content">
            <div className="container">
              <PageTitle title="PABRA at a glance" />
              <div className="numbersCards">
                {
                  NumbersCardsElem.smallCards.map((el, i) => (
                    <NumbersCard {...el} key={i} />
                  ))
                } 
              </div>

              <div className="single-huge-statistic-card">
                <StatisticsCard />
              </div>

            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default home
