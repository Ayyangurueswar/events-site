import logo from '@/public/next.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='w-full flex flex-col md:flex-row justify-between items-center px-8 py-4'>
      <div>
        <Link href='/' className='flex gap-2 items-center'>
          <Image src={logo} alt='logo' className='w-10 h-10'/>
          <h3 className='font-bold text-orange-700'>Nxt Events</h3>
        </Link>
      </div>
      <nav className='flex flex-row gap-8'>
        <Link href='/'>Events</Link>
        <Link href='/'>Events</Link>
        <Link href='/'>Events</Link>
        <Link href='/'>Events</Link>
      </nav>
    </header>
  )
}

export default Header
