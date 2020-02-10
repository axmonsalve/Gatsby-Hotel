import React from "react"
import { css } from '@emotion/core'
import Layout from "../components/layout"
import ImageHotel from "../components/imageHotel"
import HomeContent from "../components/HomeContent"
import RoomPreview from '../components/roomPreview'
import useRooms from "../hooks/use-rooms"

const IndexPage = () => {
  //Hacemos uso del hook
  const rooms = useRooms();
  console.log(rooms);
  return (
    <Layout>
      <ImageHotel />
      <HomeContent />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras habitaciones</h2>
      <ul>
        {rooms.map(room => (
          <RoomPreview />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
