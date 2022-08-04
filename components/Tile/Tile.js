import Image from 'next/image'

function Tile() {
  return (
    <div className='cursor-pointer mb-8'>
      <div className='mb-4'>
        <Image src='https://images.unsplash.com/photo-1628697723581-fd4ec5c38ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWJ1ZCUyMGJhbGl8ZW58MHx8MHx8&w=1000&q=80'
            alt='Your next dream place'
            width={3840}
            height={3840}
            layout='responsive'
            objectFit='cover'
            className='rounded-md'/>
      </div>
        <div className='flex flex-row justify-between'>
            <span className='font-bold'>Nazwa</span>
            <span>Ocena</span>
        </div>
        <div>
            <span>Data</span>
        </div>
        <div>
            <span className='font-bold'>6000 zł </span>
            <span>noc</span>
        </div>
      </div>
  )
}

export default Tile
