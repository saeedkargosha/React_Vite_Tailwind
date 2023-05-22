export default function TaskA() {
  return (
    <div className='grid h-full gap-2 p-2 grid-rows-[1fr_10fr_1fr] text-xl font-semibold'>
      <header className='grid gap-2 grid-cols-[4fr_3fr]'>
        <a className='bg-yellow-400'>
          <span>{'Site Title'}</span>
        </a>
        <nav className='h-full'>
          <ul className='h-full grid grid-cols-3 gap-2'>
            <li className='bg-pink-100'>{'Nav 1'}</li>
            <li className='bg-pink-100'>{'Nav 2'}</li>
            <li className='bg-pink-100'>{'Nav 3'}</li>
          </ul>
        </nav>
      </header>
      <div className='grid gap-2 grid-cols-[5fr_1fr]'>
        <article className='grid gap-2 grid-rows-[1fr_10fr]'>
          <h1 className='bg-blue-200'>{'Post Title'}</h1>
          <main className='grid gap-2 grid-cols-[1fr_4fr]'>
            <section className='bg-green-400'>{'Post Meta'}</section>
            <div className='grid gap-2 grid-rows-[1fr_1.5fr]'>
              <section className='bg-gray-400'>{'Main Content'}</section>
              <section className='bg-yellow-300'>
                {'Main Content Image'}
              </section>
            </div>
          </main>
        </article>
        <aside className='grid grid-rows-3 gap-2'>
          <div className='bg-orange-400'>{'Side Bar'}</div>
          <div className='bg-green-700'>{'Ads'}</div>
          <div className='bg-pink-700'>{'Other Stuffs'}</div>
        </aside>
      </div>
      <footer className='bg-blue-400'>{'@2018 footer'}</footer>
    </div>
  )
}
