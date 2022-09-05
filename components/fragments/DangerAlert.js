import { MdClose } from 'react-icons/md'

const DangerAlert = ({ clickAction }) => {
  return (
    <div className='flex flex-row justify-between p-4 mb-4 text-sm bg-red-300 rounded-lg text-red-800' role='alert'>
        <div>
            <span className='font-bold'>Something went wrong!</span> Please, try again
        </div>
        <div>
            <button onClick={clickAction}><MdClose /></button>
        </div>
    </div>
  )
}

export default DangerAlert
