import { useState } from 'react';
import Dropdown from './Dropdown';
import './Header.css'

function Header() {
  const [dropdown, setDropdown] = useState(false); 
  return (
    <>
      <header className='header'>
        <div className='header_wrap'>
          <h2 className='header__logo fs-h2'>
            Jinwoo Portfoilo
          </h2>
          <nav className='header__nav'>
            <div className='header__nav_logo' onClick={() => {
              setDropdown(!dropdown)
            }}></div>
          </nav>
        </div>
        <div className='header__dropdown'>
          {dropdown && <Dropdown />}
        </div>
      </header>
    </>
  )
}

export default Header;