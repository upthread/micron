import React from 'react'
import PouchDB from 'pouchdb'

const Data = async () => {

    const localDb = new PouchDB('rmtdb')
    // const remoteDb = new PouchDB('http://localhost:5984/rmtdb')

    try {
        const info = await localDb.info()
        console.log(info)
    } catch (error) {
        
    }



    return (
        <div>
            
        </div>
    )
}

export default Data
