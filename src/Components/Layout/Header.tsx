import { useState } from 'react';
import Logo from '../Display/Logo';
import Menu from '../Navigation/Menu';


function Header(props) {

  const [ openMenu, setOpenMenu ] = useState( false );
  return (
    <header className='bg-amber-700'>
      <nav className='max-w-screen-xl mx-auto p-4 flex items-center justify-between'>

        <a className='flex items-center' href='#'>
          <Logo />
        </a>

        <div className='hidden md:block'>
          <Menu />
        </div>

        <button 
          className='md:hidden inline-flex items-center justify-center ease-out'
          onClick={ () => setOpenMenu( !openMenu ) }
          >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </nav>
      <div className='md:hidden'>
          { openMenu && <Menu />}
        </div>        

    </header>
  );
}

export default Header;