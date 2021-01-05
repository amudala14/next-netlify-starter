import React from 'react'
import Head from 'next/head'

import Aside from "../components/Aside/Aside"
import Footer from '../components/Footer/Footer'
import TopHead from '../components/Head/Head'
import PageTitle from '../components/PageTitle/PageTitle'
import NumbersCard from '../components/Cards/NumbersCard'
import List from '../components/Lists/List'
import HugeStatisticsCard from '../components/Cards/HugeStatisticsCard'

const home = () => {
  const NumbersCardsElem = {
    smallCards: [
      { title: 'PABRA Networks', total: '700 tn', 'smallDetails': 'Harvested (Tonnes)', link: '#', 'bgCard': 'bg-primary', hasLink: false },
      { title: 'Bean Corridors', total: '30 tn', 'smallDetails': 'Traded (Tonnes)', link: '#', 'bgCard': 'bg-secondary', hasLink: false },
      { title: 'Percentage', total: '93%', 'smallDetails': 'Sold (Tonnes)', link: '#', 'bgCard': 'bg-tertiary', hasLink: false },
      { title: 'Producers participating in the trade', 'smallDetails': '', total: '80%', link: '#', 'bgCard': 'bg-dark', hasLink: false },
      { title: 'Volume of processed bean products', 'smallDetails': '', total: '120 tn', link: '#', 'bgCard': 'bg-dark-1', hasLink: false },
      { title: 'Number of SMEs', 'smallDetails': '', total: 45, link: '#', 'bgCard': 'bg-primary', hasLink: true },
      { title: 'Business service providers', 'smallDetails': '', total: 24, link: '#', 'bgCard': 'bg-secondary', hasLink: true },
      { title: 'Marketable bean products', 'smallDetails': '', total: 20, link: '#', 'bgCard': 'bg-tertiary', hasLink: true },
      { title: 'Total land', 'smallDetails': '(Hectares)', total: '200 ha', link: '#', 'bgCard': 'bg-dark', hasLink: false },
      { title: 'Producers Participating In The Trade', 'smallDetails': '', total: 1000, link: '#', 'bgCard': 'bg-dark-1', hasLink: false }
    ],

    section1: [
      { title: 'Farmers', 'smallDetails': '', total: '30 Million', link: '#', 'bgCard': '', hasLink: false },
      { title: 'Seed produced', 'smallDetails': '', total: '200 tn', link: '#', 'bgCard': '', hasLink: false },
      { title: 'Bean marketed', 'smallDetails': '', total: '200 tn', link: '#', 'bgCard': '', hasLink: false },
      { title: 'Farmers linked to markets', 'smallDetails': '', total: '2 Million', link: '#', 'bgCard': '', hasLink: false },
      { title: 'bean exported/regionally traded', 'smallDetails': '', total: '200 tn', link: '#', 'bgCard': '', hasLink: false }
    ]
    
}
  return (
    <div>
      <Head>
        <title>PABRA - Bean Production and Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Aside linkActive='production' />
        <div className="main">
          <TopHead />
          <div className="wrapper-content">
            <div className="container">
              <PageTitle title="Bean Production and Marketing"/>
              <div className="numbersCardsContainer">
                {
                  NumbersCardsElem.smallCards.map((el, i) => (
                    <NumbersCard {...el} key={i} />
                  ))
                } 
              </div>

              {/* <div className="single-huge-statistic-card">
                <HugeStatisticsCard />
              </div> */}

              <div className="section-1">
                  <div className="medium-card">
                    <div className="statistic-card__head">
                      <div class="statistic-card--title">ALL PABRA COUNTRIES</div>
                      <div class="statistic-card--filter">
                        <span>ECABREN</span>
                        <img src="/assets/images/filter.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards-group">
                      {
                        NumbersCardsElem.section1.map((el, i) => (
                          <NumbersCard {...el} key={i} />
                        ))
                      } 
                  </div>
              </div>

              {/* <div className="section-lists">
                <List />
              </div> */}

            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default home
