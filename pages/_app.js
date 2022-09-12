import Layout from '../components/Layout'
import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { AuthContextProvider } from '../context/AuthContext'
import { DatesContextProvider } from '../context/DatesContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <DatesContextProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </DatesContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
