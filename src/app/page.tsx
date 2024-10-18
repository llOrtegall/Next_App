import { optionsAuth } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"; 
import LoginPage from "./login/page";


export default async function Home() {
  const session = await getServerSession(optionsAuth);

  if (!session)return <LoginPage session={session} />;

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
