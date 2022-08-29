import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
