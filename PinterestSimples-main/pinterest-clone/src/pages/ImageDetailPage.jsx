import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const imagesData = [
  { id: 1, title: 'Neymar celebra vitória com a Seleção Brasileira.', description: 'O jogador Neymar, vestindo a camisa 10 da Seleção Brasileira, comemora durante uma partida de futebol. Ele exibe um gesto com as mãos, sugerindo celebração de um momento especial no jogo.', src: 'public/Futebol1.jpg' },
  
  { id: 2, title: 'Celebrando o Orgulho de Ser Madridista', description: 'O jogador exibe com emoção o escudo do Real Madrid após uma performance impressionante.', src: 'public/Futebol2.jpg' },

  { id: 3, title: 'Messi e a Tranquilidade em Campo', description: 'O capitão da Argentina, com a camisa número 10, sorri com leveza durante uma partida.', src: 'public/Futebol3.jpg' },

  { id: 4, title: 'O Chute Histórico no Octógono', description: 'Anderson Silva aplica um icônico chute frontal em Vitor Belfort durante sua luta no UFC.', src: 'public/Luta1.jpg' },

  { id: 5, title: 'Lutador de MMA aplicando golpe decisivo', description: ' imagem mostra um lutador de MMA no octógono desferindo um golpe poderoso com o punho fechado em direção ao adversário. ', src: 'public/Luta2.jpg' },

  { id: 6, title: 'Lutadoras de MMA em combate intenso', description: 'A imagem mostra duas lutadoras de MMA no meio de uma troca de golpes.', src: 'public/Luta3.jpg' },

  { id: 7, title: 'Jogador de basquete expressando emoção durante jogo', description: 'A imagem mostra um jogador de basquete da seleção dos EUA (USA), usando a camisa número 4, em um momento de expressão emocional durante a partida.', src: 'public/Basquete1.jpg' },

  { id: 8, title: 'Determinação em quadra!', description: 'Um jogador de basquete, vestindo o uniforme da seleção dos EUA com o número 4, expressa intensa emoção após uma jogada.', src: 'public/Basquete2.jpg' },

  { id: 9, title: 'Comemorando a vitória com orgulho!', description: 'O jogador de basquete, vestindo o uniforme da seleção dos EUA com o número 4, sorri amplamente enquanto segura a bandeira americana.', src: 'public/Basquete3.jpg' },
];

const ImageDetailPage = () => {
  const { id } = useParams();
  const image = imagesData.find((img) => img.id === parseInt(id));

  return (
    <div className="image-detail">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetailPage;
