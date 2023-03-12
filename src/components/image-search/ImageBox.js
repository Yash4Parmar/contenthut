import React from 'react'
// import { Link } from 'react-router-dom';

const ImageBox = ({ urltoImg, itemId, imgSrc }) => {
    // console.log(urltoImg);
    return (
        <>
            {/* <Link to={urltoImg}> */}
            <img src={`${imgSrc}`} alt="somthingswallpaper" key={itemId} />
            {/* </Link> */}
        </>
    )
}

export default ImageBox
