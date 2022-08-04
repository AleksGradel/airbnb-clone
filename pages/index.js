import Tile from "../components/Tile/Tile";

export default function Home() {
  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='p-12 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  )
}
