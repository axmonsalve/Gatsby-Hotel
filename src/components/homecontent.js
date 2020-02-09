import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const HomeContent = () => {

    const information = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: { slug: { eq: "inicio" }}){
            nodes{
                titulo
                contenido
                imagen{
                fluid{
                    ...GatsbyDatoCmsFluid
                }
                }
            }
            }
        }
    `);

    // console.log(information.allDatoCmsPagina.nodes[0]);

    const { titulo, contenido, imagen } = information.allDatoCmsPagina.nodes[0];


    return ( 
        <>
            <h2>{titulo}</h2>
            <div>
                <p>{contenido}</p>
                <img src={imagen.fluid.src} alt=""/>
            </div>
        </>
     );
}
 
export default HomeContent;