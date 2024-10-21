import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const CategoryPage = () => {
  const { category } = useParams();  // Correção: useParams em vez de props.match.params

  const imagesData = [
    { id: 1, title: 'Futebol 1', category: 'Futebol', src: 'Futebol1.jpg' },
    { id: 2, title: 'Futebol 2', category: 'Futebol', src: 'Futebol2.jpg' },
    { id: 3, title: 'Futebol 3', category: 'Futebol', src: 'Futebol3.jpg' },
    { id: 4, title: 'Luta 1', category: 'Luta', src: 'Luta1.jpg' },
    { id: 5, title: 'Luta 2', category: 'Luta', src: 'Luta2.jpg' },
    { id: 6, title: 'Luta 3', category: 'Luta', src: 'Luta3.jpg' },
    { id: 7, title: 'Basquete 1', category: 'Basquete', src: 'Basquete1.jpg' },
    { id: 8, title: 'Basquete 2', category: 'Basquete', src: 'Basquete2.jpg' },
    { id: 9, title: 'Basquete 3', category: 'Basquete', src: 'Basquete3.jpg' },
  ];

  // Filtra as imagens de acordo com a categoria
  const filteredImages = imagesData.filter((image) => image.category === category);

  return (
    <div>
      <h1>Categoria: {category}</h1>
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <Link to={`/image/${image.id}`}>
            <img src={image.src} alt={image.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
