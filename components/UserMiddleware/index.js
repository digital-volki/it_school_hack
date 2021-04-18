import React, {useContext, useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import GET_SELF from '../../lib/apollo/schemas/getSelf.graphql'
import fp from 'lodash/fp'

const UserCtx = React.createContext(undefined, undefined)

export const useUserCtx = () => {
    return useContext(UserCtx)
}

const UserMiddleware = ({children}) => {
    const [generateProfile, {called, loading, data}] = useMutation(GET_SELF);
    const [ctx, setCtx] = useState({
        id: null
    })

    useEffect(async () => {
        if (window) {
            if (!(window.localStorage.getItem('id'))) {
                await generateProfile()
            } else {
                ctx.id = window.localStorage.getItem('id')
                setCtx({...ctx})
            }
        }
    }, [])


    useEffect(() => {
        try {
            if (called && !loading) {
                setCtx(s => s.id = data?.generateUser?.value.id)
                fp.keys(data?.generateUser?.value).map((key) =>
                    window.localStorage.setItem(key, data?.generateUser?.value[key])
                )
            }
        } catch (e) {
            console.log(e)
        }
    }, [called, loading])
    return (
        <UserCtx.Provider value={{ctx, setCtx}}>
            {loading || children}
        </UserCtx.Provider>
    )
}

export default UserMiddleware