import React from 'react'

export const GifGridItem = ( {id, url, title} ) => {
    // console.log({id, title, url})
  return (
    <div className='bg-transparent w-auto animate__animated animate__fadeIn'>
        <img className='rounded' style={{ width: "200px" }} src={url} alt={title} />
        <p> {title} </p>
    </div>
  )
}
