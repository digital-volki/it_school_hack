import App from "next/app";
import dynamic from "next/dynamic";
import '../styles/globals.scss'

import {Provider} from "../components/GeneralCtx";

const UserMiddleware = dynamic(() => import('../components/UserMiddleware'), {ssr: false})
// import {UserMiddleware} from "../components/UserMiddleware";


function MyApp({Component, pageProps}) {
    return (
        <Provider props={pageProps}>
            <UserMiddleware>
                <Component {...pageProps} />
            </UserMiddleware>
        </Provider>

    )
}

MyApp.getInitialProps = async ctx => {

    const appProps = await App.getInitialProps(ctx);

    // console.log(ctx.ctx.req.cookies.get('access_token'))
    // appProps.pageProps.access_token = cookies(ctx.ctx?.req?.headers.cookie).get('access_token')
    return {...appProps}
}
export default MyApp;