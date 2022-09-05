import Layout from '../components/Layout'
import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { AuthContextProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthContextProvider>
  )
}

export default MyApp
