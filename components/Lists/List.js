import React from 'react'
import Link from "next/link";

const Lists = () => {
  const listHead = [
    { title: 'input', hasSvg: false , placeholder: 'Filter by Name'},
    { title: 'Network', hasSvg: true },
    { title: 'Corridor', hasSvg: true },
    { title: 'Country', hasSvg: true},
    { title: 'input', hasSvg: false, placeholder: 'Filter by ID' },
    { title: 'Contact', hasSvg: false},
    { title: 'Details', hasSvg: false},
  ]

  const lists = [
    { name: "KAFLOBE", network: "ECABREN", coridor: "ECABREN", country: "Burundi", id: 10105, contact: "None", detailsUrl: "/profile"},
    { name: "KAFLOBE", network: "ECABREN", coridor: "ECABREN", country: "Rwanda", id: 10106, contact: "none", detailsUrl: "/profile" },
    { name: "KAFLOBE", network: "ECABREN", coridor: "ECABREN", country: "Burundi", id: 10105, contact: "None", detailsUrl: "/profile" },
    { name: "KAFLOBE", network: "ECABREN", coridor: "ECABREN", country: "Rwanda", id: 10106, contact: "none", detailsUrl: "/profile" },
  ]
  return (
    <div className="lists">
      <h1 className="list-title">PABRA SMEs</h1>
      <div className="list-head">
        {
          listHead.map((el, i) => (
            <div key={ i }>
              <span className="list-head--title">{el.title === 'input' ? (<input type="text" placeholder={`${el.placeholder}`} />) : el.title }</span>          
              { el.hasSvg ? (<span><img src="/assets/images/arrow-down.svg" alt=""/></span>) : ''}
            </div>
          ))
        }
      </div>
      <div className="divider"></div>
      <div className="list-items">
        {
          lists.map((el, i) => (
            <div className="list-item">
              <div className="">{ el.name }</div>
              <div className="">{ el.network }</div>
              <div className="">{ el.coridor }</div>
              <div className="">{ el.country }</div>
              <div className="">{ el.id }</div>
              <div className="">{el.contact}</div>
              <Link href={`${el.detailsUrl}`}>VIEW DETAILS</Link>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Lists
