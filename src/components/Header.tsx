'use client';

import { signOut } from 'next-auth/react';

export default function Header() {

  return (
    <>
      <section>
        <h1 className='text-2xl font-bold'>Bienvenido Chat</h1>
        
      </section>
      <button onClick={ () => signOut() } className='bg-blue-600 px-4 py-2 rounded-md text-white'>
        Cerrar Sesión
      </button>
    </>
  )
}