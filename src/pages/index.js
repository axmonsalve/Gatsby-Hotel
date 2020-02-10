import React from "react"
import Layout from "../components/layout"
import ImageHotel from "../components/imageHotel"
import HomeContent from "../components/HomeContent"
import useRooms from "../hooks/use-rooms"

const IndexPage = () => {
  //Hacemos uso del hook
  useRooms();
  
  return (
    <Layout>
      <ImageHotel />
      <HomeContent />
    </Layout>
  )
}

export default IndexPage
