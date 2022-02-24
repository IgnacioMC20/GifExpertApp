import React from 'react'
import { useFetchGifs } from './hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([])
  // useEffect(() => {
  //   getGifs(category).then( setImages);
  // }, [])

  const {data:images, loading} = useFetchGifs( category );

  // getGifs();
  return (
    <div>
      <h3 className='text-danger animate__animated animate__fadeInLeft'> {category} </h3>
    {loading && 'Cargando...'}
      <div className='row d-flex justify-content-around'>
          {
            images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))
          }
      </div>
    </div>
  )
}
