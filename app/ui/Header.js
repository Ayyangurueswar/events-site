import logo from '@/public/next.svg';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

const Header = () => {
  return (
    <header className='w-full flex flex-col md:flex-row justify-between items-center px-8 py-4'>
      <div>
        <Link href='/' className='flex gap-2 items-center'>
          <Image src={logo} alt='logo' className='w-10 h-10'/>
          <h3 className='font-bold text-orange-700 text-2xl'>Nxt Events</h3>
        </Link>
      </div>
      <Search />
      <nav className='flex flex-row gap-8'>
        <Link href='/events'>Events</Link>
        <Link href='/events/add'>Add Events</Link>
      </nav>
    </header>
  )
}

export default Header
