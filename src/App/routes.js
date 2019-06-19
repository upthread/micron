import React from 'react'
import { Route } from 'react-router-dom'

import Form from '../Form'
import Template from '../Template'
import MultiStepForm from '../MultiStepForm'
import Splash from '../Splash'

const routes = () => {
    return (
        <>
            <Route exact path='/'  component={Splash} /> 
            <Route path='/templ'  component={Template} /> 
            <Route path='/multi'  component={MultiStepForm} /> 
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
        </>
    )
}

export default routes
