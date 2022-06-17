import { NavLink } from 'react-router-dom'
import { IoLogoPolymer } from 'react-icons/io'

const CustomNavLink = ({ name, to }: { name: string; to: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-4 px-4 flex items-center justify-center text-white ${
          isActive ? 'bg-[#5D3DC2]' : undefined
        }`
      }
    >
      {name}
    </NavLink>
  )
}

const Logo = () => {
  return (
    <span className='flex items-center justify-center px-5 h-full'>
      <IoLogoPolymer color='#ffffff' size={36} />
    </span>
  )
}

const Navbar: React.FC = () => {
  return (
    <nav className='bg-[#000344] flex w-full overflow-hidden justify-between'>
      <ul className='flex'>
        <li>
          <Logo />
        </li>
        <li>
          <CustomNavLink name='Dashboard' to='/' />
        </li>
        <li>
          <CustomNavLink name='Orders' to='orders' />
        </li>
        <li>
          <CustomNavLink name='Configuration' to='configuration' />
        </li>
      </ul>

      <div className='flex items-center mr-5 '>
        <div className='bg-[#C4C4C4] rounded-full w-10 h-10 relative flex items-center justify-center'>
          <span>KS</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
