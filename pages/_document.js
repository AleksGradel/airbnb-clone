import Document, { Html, Head, Main, NextScript } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
            <title>Airbnb clone</title>
            <meta name='description' content='This is app is a clone of airbnb'/>
            <link rel='icon' href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/desert-island_1f3dd-fe0f.png' />
            <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument