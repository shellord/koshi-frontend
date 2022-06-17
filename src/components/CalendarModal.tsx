import { Dialog } from '@headlessui/react'
import Calendar from 'react-calendar'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CalendarModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='relative z-50'
    >
      <div className='fixed inset-0 bg-black/60' aria-hidden='true' />

      <div className='fixed inset-0 flex items-center justify-center'>
        <Dialog.Panel className='bg-white p-4'>
          <Dialog.Title></Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <div>
            <Calendar />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default CalendarModal
