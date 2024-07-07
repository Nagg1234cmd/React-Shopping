import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import  Collections from '../components/Collections'
import Footer from '../components/Footer'
import WomenCollections from '../components/WomenCollections'



import {Gents,Women} from '../data'
const MainPage = () => {
  const[gentsFashion,setGentsFashion]=useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Women)
  
  console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomenCollections ladiesFashion={ladiesFashion}/>
        
        <Footer />

      
    </div>
  )
}

export default MainPage
