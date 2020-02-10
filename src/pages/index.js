import React from "react"
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from "../components/layout"
import ImageHotel from "../components/imageHotel"
import HomeContent from "../components/HomeContent"
import RoomPreview from '../components/roomPreview'
import useRooms from "../hooks/use-rooms"

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 100%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

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
      <RoomsList>
        {rooms.map(room => (
          <RoomPreview 
            key={room.id}
            room={room}
          />
        ))}
      </RoomsList>
    </Layout>
  )
}

export default IndexPage
