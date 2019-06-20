import React from 'react'
import PouchDB from 'pouchdb'

const Data = () => {

    const localDb = new PouchDB('rmtdb')
    // const remoteDb = new PouchDB('http://localhost:5984/rmtdb')

    const dbInfo = async () => {
        
        try {
            const info = await localDb.info()
            console.log(info)
        } catch (error) {
            console.log(error)
        }

    }

    dbInfo()


    return(
        <div>
            Data
        </div>
    ) 
}

export default Data
