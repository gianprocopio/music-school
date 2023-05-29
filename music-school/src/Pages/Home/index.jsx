import React from 'react';
import Layout from '../../Components/Layout';
import Carousel from '../../Components/Carousel';

function Home() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const images = [
    'src/assets/drums.jpg',
    'src/assets/guitarra.jpg',
    'src/assets/chicos.jpg',
    'src/assets/canto.jpg',
  ]
  return (
    <Layout>
      <Carousel images={images}/>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='mb-2 font-bold text-2xl text-red-600'>La mejor escuela de música de zona oeste</h2>
        <p className='text-md mx-28 text-gray-600 text-center font-medium'>Vení a tomar clases de lo que quieras: Canto, Guitarra (eléctrica y criolla), Bajo, Piano, Teclado, Flauta, Violín, Acordeón y todo lo que te puedas imaginar.</p>
      </div>
    </Layout>
  )
}

export default Home