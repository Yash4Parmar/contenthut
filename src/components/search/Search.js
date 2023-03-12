import axios from 'axios';
import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import ImageSearch from '../image-search/ImageSearch';

const Search = () => {

    const [searchText, setSearchText] = useState("");
    // const [amount, setAmount] = useState(15);
    const [images, setImages] = useState([]);
    const apiUrl = "https://pixabay.com/api"
    const key = "32534285-9da75e5747378a1b83534c66b"

    const haldleSearch = (e) => {
        setSearchText(e.target.value)
    }

    const handleClick = () => {
        axios.get(`${apiUrl}/?key=${key}&q=${searchText}&image_type=photo&per_page=15`).then(res => (setImages(res.data.hits)));
        console.log(images);
    }

    return (
        <>
            <TextField
                sx={{ width: '22ch', margin: '20px' }}
                id="outlined-basic"
                variant="outlined"
                name='searchText'
                value={searchText}
                placeholder="search image"
                onChange={haldleSearch} />
            <Button sx={{ margin: "20px" }} variant="outlined" onClick={handleClick}>Search</Button>
            {images && <ImageSearch images={images} />}
        </>
    )
}

export default Search
