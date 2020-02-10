import React from "react"
import Image from 'gatsby-image'

const RoomPreview = ({ room }) => {
  const { contenido, imagen, slug, titulo } = room
  return (
    <div>
        <Image 
            fluid={imagen.fluid}
        />
      <div>
          <h3>{titulo}</h3>
          <p>{contenido}</p>
      </div>
    </div>
  )
}

export default RoomPreview
