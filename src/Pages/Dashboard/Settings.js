import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { details } from '../../actions/clientAction'

function Settings() {

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin

    useEffect(() => {
        if(!clientInfo){
            history.push('/login/client')
        } else {
           
             dispatch(details())
        }
    }, [history, clientInfo, dispatch])
    
    return (
        <div>
            Settings
        </div>
    )
}

export default Settings
