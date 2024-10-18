'use client';

import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'

export default function LoginPage({ session }: { session: Session | null }) {
  return (
    <div>
      {
        session ? (
          <>
            <p>Signed in as {session?.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>Not signed in</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )
      }
    </div>
  );
}