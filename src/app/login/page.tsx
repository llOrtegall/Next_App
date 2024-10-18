'use client';

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div>
        <button onClick={() => signIn('google')} className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800'>
          Iniciar Sesión con Google
        </button>
      </div>
    </section>
  );
}