import React from 'react'
import { Route } from 'react-router-dom'

import Form from '../Form'
import Template from '../Template'
import MultiStepForm from '../MultiStepForm'

const routes = () => {
    return (
        <>
            <Route path='/form'  component={Form} /> 
            <Route path='/template'  component={Template} /> 
            <Route path='/multistep'  component={MultiStepForm} /> 
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
            {/* <Route path='/'  component={} />  */}
        </>
    )
}

export default routes
