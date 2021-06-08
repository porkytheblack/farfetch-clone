import Head from 'next/head'
import Header from '../components/Header'
import HomePageBody from '../components/HomePageBody'
import NavHover from '../components/NavHover'

export default function Home() {
  return (
    <div className=" ml-auto mr-auto relative" style={{maxWidth:"1365px"}}>
      <Head>
        <title>Farfetch</title>
        <meta name="description" content="this is my farfetch clone" />
        <link rel="icon" href="https://media.glassdoor.com/sqll/799159/farfetch-squarelogo-1599647796128.png" />
      </Head>
      <NavHover/>
      <Header/>
      <HomePageBody/>
    </div>
  )
}
