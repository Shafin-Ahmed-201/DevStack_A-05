import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner'
import Nav from './components/nav'
import Technologies from './components/technologies'
import Footer from './components/footer'
import { ToastContainer } from 'react-toastify'


function App() {
   const TechPromise=async()=>{
    const res=await fetch('/data.json')
    const data=await res.json()
    return data
   }
  return (
    <>
    <ToastContainer/>
     <Nav></Nav>
     <Banner></Banner>
    <Suspense fallback={<>Loading...</>}><Technologies techpromise={TechPromise()}></Technologies></Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
