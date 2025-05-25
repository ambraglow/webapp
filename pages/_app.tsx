import './styles/global.scss'
import type { AppProps } from "next/app";

// https://nextjs.org/docs/pages/building-your-application/routing/custom-app
export default function MyApp ({Component, pageProps}: AppProps)  {
    return <Component {...pageProps} />
} 