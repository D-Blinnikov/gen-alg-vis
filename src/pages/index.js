import InputForm from "../components/InputForm";
import { HEADER_TEXT } from "../functions/service";
import SpaceWrapper from "../components/SpaceWrapper";
import LogNavbar from "../components/LogNavbar";
import { getSession } from "next-auth/react";

export default function Home({session}) {

  const balls = []
  const disposedBalls = []

  return (
   <div  id="container" className="grid bg-slate-400 w-screen h-screen  grid-cols-3">
    
      <title>Genetic Algorythm Visualisation</title>
    
    <div id="left" className="bg-white p-8 ">
      <h1 className="mb-16 text-center text-gray-800 font-bold text-2xl">{HEADER_TEXT}</h1>
      <InputForm/>
    </div>

    <div id="right" className="bg-cyan-50 col-span-2">
        <SpaceWrapper session = {session}
        balls = {balls}
        disposedBalls = {disposedBalls}/>
    </div>
    
    <div className="fixed top-7 left-1320px text-gray-800">
        <LogNavbar session = {session}/>
    </div>
   
   </div>
  )
}

export async function getServerSideProps({req}) {
  
  const session = await getSession({req})
      
  return { 
          props: {session}
      } 
}