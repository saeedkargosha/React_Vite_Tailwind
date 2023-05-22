import { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/task-a')
    }
  }, [location.pathname, navigate])

  return (
    <div className='h-full flex flex-col'>
      <nav className='py-4 px-10'>
        <ul className='list-none flex flex-row gap-8 border-b pb-2 text-neutral-500'>
          <li>
            <NavLink
              to='/task-a'
              className={({ isActive }) =>
                isActive ? 'text-neutral-900 font-semibold' : ''
              }>
              {'Task-A'}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/task-b'
              className={({ isActive }) =>
                isActive ? 'text-neutral-900 font-semibold' : ''
              }>
              {'Task-B'}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/task-c'
              className={({ isActive }) =>
                isActive ? 'text-neutral-900 font-semibold' : ''
              }>
              {'Task-C'}
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className='flex-grow'>
        <Outlet />
      </section>
    </div>
  )
}
