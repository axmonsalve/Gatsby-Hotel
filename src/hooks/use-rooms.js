import { graphql, useStaticQuery } from 'gatsby';
//Este archivo guardará la consulta por si se requiere reutilización

const useRooms = () => {
    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                    titulo
                    id
                    slug
                    contenido
                    imagen{
                        fluid(maxWidth: 1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);
    console.log(data);
}
 
export default useRooms;
