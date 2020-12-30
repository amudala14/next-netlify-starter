import React from 'react'
import Head from 'next/head'

import Aside from "../components/Aside/Aside"
import Footer from '../components/Footer/Footer'
import TopHead from '../components/Head/Head'
import PageTitle from '../components/PageTitle/PageTitle'
import EnterpriseCard from '../components/Cards/EnterpriseCard'

const Profile = () => {
  const enterprises = [
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
      { name: 'Musalac', country:'Burundi', imgPath: '', network: 'ECABREN', owner: 'Individual owned (sole proprietor)' },
    
    ]
  
  return (
    <div>
      <Head>
        <title>PABRA - Bean Enterprises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Aside linkActive='bean-enterprises' />
        <div className="main">
          <TopHead />
          <div className="wrapper-content">
            <div className="container">
              
              <PageTitle title="Bean Enterprises"/>
              
              <div className="section-enterprises">
                <div className="enterprise-head">

                  <form className="form-search">
                    <input type="text" className="search form-control no-border" placeholder="Search enterprise by name…" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.586" height="15.59" viewBox="0 0 15.586 15.59">
                      <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M19.9,18.955l-4.335-4.376a6.178,6.178,0,1,0-.938.95l4.307,4.347a.667.667,0,0,0,.942.024A.672.672,0,0,0,19.9,18.955Zm-9.189-3.373a4.878,4.878,0,1,1,3.45-1.429A4.848,4.848,0,0,1,10.714,15.582Z" transform="translate(-4.5 -4.493)" fill="#a8acac"/>
                    </svg>
                  </form>

                  <div className="statistic-card--filter">
                    <span>Filter</span>
                    <img src="/assets/images/filter.svg" alt=""/>
                  </div>

                </div>

                <div className="enterprise-content">
                  <div className="enterprise-group">
                    {
                      enterprises.map((el, i) => (
                        <EnterpriseCard key={i} {...el} />
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