import React from 'react'
import ShopLayout from '../components/layout/ShopLayout';

const ContactoPage = () => {
  return (
    <ShopLayout title={'Contacto'} description={'Sitio para conocer Midori'}>
      
      <div>
        <h1 className='text-danger'>pagina de conatcto</h1>
        <h2 className='text-3xl text-green-600 p-2'>Hola mundo</h2>
        <h4 className='bg-orange-500 font-nunito font-bold text-6xl'>Hola mundo</h4>
      </div>
    </ShopLayout>
  )
}

export default ContactoPage;