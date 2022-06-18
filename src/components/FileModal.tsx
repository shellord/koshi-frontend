import { Dialog } from '@headlessui/react'
import Calendar from 'react-calendar'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FileModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='relative z-50'
    >
      <div className='fixed inset-0 bg-black/60' aria-hidden='true' />

      <div className='fixed inset-0 flex items-center justify-center'>
        <Dialog.Panel className='bg-white p-4 w-1/3'>
          <Dialog.Title className='text-2xl'>Upload New File</Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <div className='mt-5'>
            <p>Select File to upload</p>
            <div className='flex mt-5 space-x-2 border-b pb-24'>
              <select className='border'>
                <option>Channel</option>
                <option>Channel 1</option>
                <option>Channel 2</option>
              </select>
              <input className='border w-full' />
              <button className='p-1 border border-blue-500'>
                <p className='text-blue-500'>Browse</p>
              </button>
            </div>
            <div className='flex justify-end mt-3 space-x-3'>
              <button
                className='p-1 border border-blue-500'
                onClick={() => setIsOpen(false)}
              >
                <p className='text-blue-500'>Cancel</p>
              </button>
              <button
                disabled
                className='p-2 border bg-blue-500 text-white disabled:bg-blue-200'
              >
                Upload and reconcile
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default FileModal
