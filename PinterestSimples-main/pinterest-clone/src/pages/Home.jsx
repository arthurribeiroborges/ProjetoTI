import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import Pagination from '../components/Pagination';

const imagesData = [
    { id: 1, src: 'public/Futebol1.jpg' },
    { id: 2, src: 'public/Futebol2.jpg' },
    { id: 3, src: 'public/Futebol3.jpg' },
    { id: 4, src: 'public/Luta1.jpg' },
    { id: 5, src: 'public/Luta2.jpg' },
    { id: 6, src: 'public/Luta3.jpg' },
    { id: 7, src: 'public/Basquete1.jpg' },
    { id: 8, src: 'public/Basquete2.jpg' },
    { id: 9, src: 'public/Basquete3.jpg' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(imagesData.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ImageGallery images={imagesData} />
      <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Home;