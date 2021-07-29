import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { details } from '../../actions/clientAction'

function Settings() {

    const history = useHistory()
    const dispatch = useDispatch()
    const clientLogin = useSelector(state => state.clientLoginReducer)
    const {clientInfo} = clientLogin
    const clientDetails = useSelector(state => state.clientDetailsReducer)
    const { user } = clientDetails

    useEffect(() => {
        if(!clientInfo){
            history.push('/login/client')
        } else {
            if(!user._id){
                dispatch(details(user._id))
            } else {
                history.push(`/settings/${user._id}`)
            }
        }
    }, [history, clientInfo, user._id, dispatch])
    
    return (
        <div>
            Settings
        </div>
    )
}

export default Settings
