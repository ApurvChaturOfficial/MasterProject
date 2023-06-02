import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import clearFormObject from '../../dFunction/aClearFormObject'
import validateFormObject from '../../dFunction/bValidateFormObject'
import handleInput from '../../dFunction/dHandleInput'
import FinalRouteName from '../../gRoute/FinalRouteName'
import Header from '../cHeader'
import UnauthorisedCard from '../dUnauthorisedCard'
import "./index.css"

const LCRUD = (props) => {
  const { 
    Redux, APICalls, validateFormValues, 
    List, Create, Retrieve, Update, Delete, 
    close1, close2, close3, close4,
    header, access
  } = props  
	
  // JSX
  return (
    access?.Redux1.state.ReceivedObject?.UserAccess?.[access.name]?.list ?
      <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
          <Header Redux={Redux} header={header} access={access} />

          {/* List */}
          <List
            Redux={Redux}
            APICalls={APICalls}
            access={access}
          />
        </div>

        <div class="content-backdrop fade"></div>

        {/* Create */}
        <Create 
          Redux={Redux}
          validateFormValues={validateFormValues}
          close1={close1}
        />

        {/* Retrieve */}
        <Retrieve 
          Redux={Redux}
          close2={close2}
        />

        {/* Update */}
        <Update 
          Redux={Redux}
          validateFormValues={validateFormValues}
          close3={close3}
        />

        {/* Delete */}
        <Delete 
          Redux={Redux}
          APICalls={APICalls}
          close4={close4}
        />
      </div>
      :
      <UnauthorisedCard />
  )
}

export default LCRUD