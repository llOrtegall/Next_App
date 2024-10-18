import { optionsAuth } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Header from '@/components/Header';
import LoginPage from './login/page';

export default async function Home() {
  const session = await getServerSession(optionsAuth);

  if (!session) return <LoginPage />;

  return (
    <section className='flex h-screen w-full'>
      
      <header className='w-2/12 border-b p-4 flex flex-col items-center justify-between bg-blue-200'>
        <Header />
      </header>
      <main className='w-10/12 bg-blue-300'>
        Chat
      </main>
    </section>
  )
}
