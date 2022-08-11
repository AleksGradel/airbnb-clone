const Tile = ({ img, title, price }) => {
  return (
    <div className='cursor-pointer mb-8'>
      <div className='mb-4'>
        <img alt='Your next dream place' src={img} className='rounded-md'/>
      </div>
        <div className='flex flex-row justify-between'>
            <span className='font-bold'>{title}</span>
            <span>Ocena</span>
        </div>
        <div>
            <span>Data</span>
        </div>
        <div>
            <span className='font-bold'>${price} </span>
            <span>night</span>
        </div>
      </div>
  )
}

export default Tile
