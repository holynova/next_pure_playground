import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }
  render() {
    return (
      <html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='keywords' content="Cred, Cred Blockchain, Cred Bitcoin, Cred cryptocurrency, Cred line of credit, Cred stablecoin, Stablecoin, Stablecoin San Francisco, San Francisco, San Francisco CA, San Francisco blockchain company, San Francisco Fintech company, Blockchain, Fintech, Cryptocurrency, Crypto-currency, Crypto currency, Ether Loans, Ethereum Loans, Bitcoin Loans, Cred Loans, Cred Blockchain, Cred Ether, Cred Bitcoin, Crypto-backed loans, Crypto line of credit, Crypto loans, Crypto loans powered by Cred, Fast crypto loans, Instant Crypto loans, Instant loans, Leading crypto loan company, Secure crypto loans, C-LOC, Borrow against bitcoin, Borrow against ether, Borrow against cryptocurrency" />
          <title>Cred – Crypto-Backed Loans</title>
          <link rel="shortcut icon" href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAmFJREFUOBGlUktoE1EUPW8y08mnaZukWtNosX6qgi5EFFy6qDtxJYpuBBFcuXNVFJci3btwpYWuFAU3IqhFLS6aaiPGRqttbNTa2ObTTCaTyXy874WkCUI23hBmHu/eM+eec5hLhf8oudNszXLxacnATEqHR2LYHVNxcJeKcM/m2OZbC5JRdfAlU8WdR2t48qYIzZDolgFODcODXlw6FcLl0/1QFQbWukI2b8GvMjx+VcTksxzeLxhwHQeGybckANCTecT/7IkAxq/GIBjYjgtiiPm0gY2yBX7+9tOkfj4AyB4Gv1eiO6fJ8/mshq8/zDrA1DsNsX5FNCUXLdx/uo5oRIZZc4luBKPHghgIy0gQo1sTWYwMqRi7OICRHSqYpttucqkivhInsV7PafhTsFCuONhGQxM3h+Ht4vTrlduw0Nstk6j1s5RY0AU1kxSPRhTM0VmRGXykxfFD3W3DfIQ70BjmZ+nwPj/6gh4M0grxeR1bQwrWi7Z4FjSL93QsyadKQt9S2ca50RD57INtk6hEcTpRRlGz2wAqZHFr9MQmR/b78fajjjXa3UvU95I4y79NpJYN3Li7guSigQIBzRDDM2NpXLmdQXqlKoCbOeDi5EsOMqsmpj9oeDFbEoCr+RpZLCHS60E2V0PV4jmQEA0z3Ls+VLeRQ3Fxwj1AwMcEbc7m4VSBrKQAUpj0KmWC5wm0EpPJQgU7o13tSeTX3A3TdEBZwvhkFg9eFvArRzrR4vzXF3Bx/mQI1y5sQSgo/wvAQRrFI/z5ewXxlAGtwp2RcfSAH3u2q42WzgDNrg4vfwGo9RVOeDMaewAAAABJRU5ErkJggg==' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument