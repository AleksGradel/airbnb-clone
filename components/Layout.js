import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Airbnb clone</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
