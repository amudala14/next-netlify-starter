import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import Aside from "../components/Aside/Aside"
import Footer from '../components/Footer/Footer'
import TopHead from '../components/Head/Head'
import PageTitle from '../components/PageTitle/PageTitle'
import FormInput from '../components/FormInput/FormInput'
import FormSelect from '../components/FormSelect/FormSelect'
import DynamicInput from '../components/DynamicInput/DynamicInput';
import TextArea from '../components/TextArea/TextArea';
import FileUploader from '../components/FileUploader/FileUploader'

const Profile = () => {
  const pageMenu = [
    { menuName:'New organisation structure', slug: 'new-organization' },
    { menuName:'Bean specification', slug: 'bean-specification' },
    { menuName:'Upload file', slug: 'upload-file' }
  ]

  const [showContainer, setContainer] = useState('new-organization');
  const [newFieldCounter, setCounter] = useState([]);

  const handleShowContainer = (targetedContainer) => {
    setContainer(targetedContainer);   
    var element = document.getElementById(targetedContainer);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  const addNewField = () => {
    setCounter([...newFieldCounter, newFieldCounter.length])
  }

  const removeField = (fieldIndex) => {
    let field = document.getElementById(`field-${fieldIndex}`)
    field.parentNode.removeChild(field)
  }
 
  return (
    <div>
      <Head>
        <title>PABRA - Bean Enterprises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <Aside linkActive='add-data' />
        <div className="main">
          <TopHead />
          <div className="wrapper-content">
            <div className="container">
              
              <PageTitle title="Add Data" />
              
              <div className="section-add-data">
                <div className="section-add-data--menu">

                  {
                    pageMenu.map((el, i) => (
                      <span
                        key={i}
                        className="section-add-data--link"
                        onClick={ () => handleShowContainer(el.slug)}>
                        <span className={ showContainer ===  el.slug ? 'fw-700' : '' }>{ el.menuName }</span>
                        { showContainer === el.slug ? (<img height={ showContainer ===  el.slug ? '10' : '8'} src="/assets/images/arrow.svg" alt=""/>) : '' }
                      </span>
                    ))
                  }
                  
                </div>
                <div className="section-add-data--contents">
                  <div id="new-organization" className={ showContainer === 'new-organization' ? '' : 'd-none' }>
                    <form action="" className="newOrgForm">

                      <div className="form-input--container">
                        <FormSelect
                          name="network"
                          label="Netword"
                          classes="form-control"
                          selectOptions= {[
                            { value: '', title: 'Choose network or add new' },
                            { value: "1", title: "Value 1" },
                            { value: "2", title: "Value 2" }
                          ]}
                        />

                        <FormInput
                          name="corridor"
                          placeholder="eg: Rwanda"
                          label="Corridor" type="text"
                          classes="form-control" />
                        
                        <FormInput
                          name="countries"
                          placeholder="eg: Rwanda"
                          label="Countries" type="text"
                          classes="form-control" />
                        
                        <FormInput
                          name="sector"
                          placeholder="eg: Rwanda"
                          label="Private sector partners/SMEs" type="text"
                          classes="form-control" />
                        
                        <FormInput
                          name="countries"
                          placeholder="eg: Rwanda"
                          label="NGO partners" type="text"
                          classes="form-control" />
                        
                        <FormInput
                          name="countries"
                          placeholder="eg: Rwanda"
                          label="Government and public" type="text"
                          classes="form-control" />
                        
                        
                        {
                          newFieldCounter.map((el, i) => (
                            <div key={i} id={`field-${i}`} className="form-group">
                              <DynamicInput
                                removeThisField = { () => removeField(el) }
                                labelName="labelText[]"
                                inputName="inputValu[]"
                              />
                              </div>
                          ))
                        }

                      </div>

                      <span onClick={ addNewField } className="add-dynamic-field-container">
                        <span className="add-icon">+</span>
                        <span>Add new field</span>
                      </span>
                      
                      <div className="form-button--container mt-20">
                          <button className="formbtn">Save</button>
                      </div>
                      
                    </form>
                  </div>
                  <div id="bean-specification" className={showContainer === 'bean-specification' ? '' : 'd-none'}>
                    <form action="">
                      <div className="form-input--container">
                        <FormSelect
                          name="beanType"
                          label="Bean Type"
                          classes="form-control"
                          selectOptions= {[
                            { value: '', title: 'Choose Type' },
                            { value: "1", title: "Value 1" },
                            { value: "2", title: "Value 2" }
                          ]}
                        />

                        <FormInput
                          name="beanName"
                          placeholder="eg: Rwanda"
                          label="Bean name" type="text"
                          classes="form-control" />

                        <FormInput
                          name="beanMarketName"
                          placeholder="eg: Rwanda"
                          label="Bean market name" type="text"
                          classes="form-control" />
                        
                        <FormInput
                          name="corridor"
                          placeholder="eg: Rwanda"
                          label="Corridor" type="text"
                          classes="form-control" />
                      </div>
                      <TextArea
                          name="description"
                          placeholder="eg: Rwanda"
                          label="Bean Description"
                          classes="form-control"
                      /> 
                      <div className="form-button--container mt-30">
                          <button className="formbtn">Save</button>
                      </div>
                    </form>
                  </div>
                  <div id="upload-file" className={`${showContainer === 'upload-file' ? '' : 'd-none'}`}>
                    <FileUploader />
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