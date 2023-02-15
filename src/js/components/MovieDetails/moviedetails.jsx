import { Stack } from '@mui/material';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../../api';
import Maindetails from './maindetails';

const MovieDetails = () => {
  const [vediodetail, setvediodetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchDetails("movie", id).then(({ data }) => {
      setvediodetails(data);
    });
  }, []);


  return (
    <Stack direction={"column"}>
      <Maindetails vediodetail={vediodetail} />


    </Stack>
  )
}

export default MovieDetails