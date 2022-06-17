type Props = {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return <main className='h-[100vh]'>{children}</main>
}

export default Layout
