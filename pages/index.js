import Head from 'next/head'
import BannerOne from '../components/BannerOne'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'

export default function Home() {
  return (
    <div className="pt-1">
      <Head>
        <title>Farfetch</title>
        <meta name="description" content="this is my farfetch clone" />
        <link rel="icon" href="https://media.glassdoor.com/sqll/799159/farfetch-squarelogo-1599647796128.png" />
      </Head>
      <Header/>
      <HomeBody/>
      <BannerOne/>
    </div>
  )
}
