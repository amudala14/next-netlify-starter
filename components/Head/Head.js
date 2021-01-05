import React, { useState, useEffect} from 'react'
import Link from "next/link";
import Router from "next/router";

const Head = () => {
  return (
    <div className="header">
      <img onClick={() => Router.push('/home')} src="../assets/images/logo.png" alt="" className="header-logo d-desk-hidden" />
      <ul className="header-menu-group">
          <Link href="/home">
              <svg id="Notifications" xmlns="http://www.w3.org/2000/svg" width="15.918" height="16" viewBox="0 0 15.918 16">
              <path id="Path_1" data-name="Path 1" d="M15,14H10a2,2,0,0,1-4,0H1a.961.961,0,0,1-.9-.7,1.068,1.068,0,0,1,.3-1.1A4.026,4.026,0,0,0,2,9V6A6,6,0,0,1,14,6V9a4.026,4.026,0,0,0,1.6,3.2.947.947,0,0,1,.3,1.1A.961.961,0,0,1,15,14Z" transform="translate(-0.063)"/>
            </svg>
          </Link>
        <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <g id="Component_9_1" data-name="Component 9 – 1" transform="translate(0 0)">
                <path id="Union_1" data-name="Union 1" d="M0,16V14c0-2.2,3.6-4,8-4s8,1.8,8,4v2ZM4,4A4,4,0,1,1,8,8,4,4,0,0,1,4,4Z" transform="translate(0 0)"/>
              </g>
            </svg>
        </Link>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="15.389" height="9.397" viewBox="0 0 15.389 9.397">
            <path id="arrow" d="M109.648,208.362c.645-.645,1.271-1.275,1.9-1.9.964-.964,1.924-1.932,2.892-2.892a1.694,1.694,0,0,1,2.857.854,1.635,1.635,0,0,1-.472,1.558q-1.582,1.588-3.172,3.172-1.4,1.4-2.8,2.8a1.684,1.684,0,0,1-2.038.283,1.827,1.827,0,0,1-.37-.279q-2.993-2.987-5.981-5.981a1.7,1.7,0,0,1,.929-2.88,1.638,1.638,0,0,1,1.487.5q2.089,2.1,4.187,4.187C109.258,207.969,109.451,208.162,109.648,208.362Z" transform="translate(-101.949 -203.06)"/>
          </svg>
        </Link>
      </ul>
    </div>
  )
}

export default Head
