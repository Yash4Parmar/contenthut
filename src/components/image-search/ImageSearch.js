import React from 'react'
import ImageBox from './ImageBox'

const ImageSearch = ({ images }) => {
    // console.log(images);
    return (
        <>
            {images && images.map((items) => (
                <ImageBox urltoImg={items.pageURL} key={items.id} imgSrc={items.largeImageURL} />
            ))}
        </>
    )
}

export default ImageSearch
