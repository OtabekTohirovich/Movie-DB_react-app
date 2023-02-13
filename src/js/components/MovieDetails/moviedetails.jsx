import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../../api';

const MovieDetails = () => {
  const [vediodetail, setvediodetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchDetails("movie", id).then(({ data }) => {
      setvediodetails(data);
    });
  }, []);


  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails