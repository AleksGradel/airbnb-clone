import Layout from '../components/Layout'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'
import { ReservationDetailsContextProvider } from '../context/ReservationDetailsContext'

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <ReservationDetailsContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ReservationDetailsContextProvider>
        </AuthContextProvider>
    )
}

export default MyApp
