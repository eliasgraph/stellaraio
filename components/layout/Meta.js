import Head from 'next/head'

function Meta({title}) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Stellar AIO - Best Sneaker and Retail Bot | Shoe Bot | Automation CHeck Software"
}
export default Meta