
import Link from "next/link";

export default function Home(){
  return(

    <div className="mainBg h-[calc(100vh-60px)]
    flex
    flex-col
    justify-center
    items-center
    gap-10">
      <h1 className="text-6xl font-bold">Welcome</h1>
      <h2 className="text-3xl font-bold">Here you can make your toDo list</h2>
      <Link className="
      bg-blue-800
      p-2 rounded
      text-white
      text-2xl
      px-4
      hover:bg-blue-900
      " href={'/todo'}>Get Started</Link>
    </div>
  );
}