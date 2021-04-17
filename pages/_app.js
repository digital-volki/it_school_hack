import '../styles/globals.scss'
import App from "next/app";
import {Provider} from "../components/GeneralCtx";

function MyApp({Component, pageProps}) {
    return (
        <Provider props={pageProps}>
            <Component {...pageProps} />
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