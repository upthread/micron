import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home'
import MultiStepForm from '../MultiStepForm'
// import Form from '../Form'

const Routes = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/multistep' component={MultiStepForm} />
            {/* <Route path='/' component={} /> */}
            {/* <Route path='/' component={} /> */}
        </div>
    )
}

export default Routes
