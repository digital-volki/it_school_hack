import React, {useContext} from 'react'
import {ApolloProvider} from "@apollo/client";
import { useApollo } from "../../lib/apollo";
const GeneralCtx = React.createContext(undefined, undefined)

export const useData = () => {
    return useContext(GeneralCtx)
}

export const Provider = ({children, props}) => {
    const apolloClient = useApollo(props)

    return (
        <GeneralCtx.Provider value={{}}>
            <ApolloProvider client={apolloClient}>
                {children}
            </ApolloProvider>
        </GeneralCtx.Provider>
    )
}