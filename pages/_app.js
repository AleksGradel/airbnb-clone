import Layout from '../components/Layout'
import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { AuthContextProvider } from '../context/AuthContext'
import { ReservationDetailsContextProvider } from '../context/ReservationDetailsContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ReservationDetailsContextProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ReservationDetailsContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
