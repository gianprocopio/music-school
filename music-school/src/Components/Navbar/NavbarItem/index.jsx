import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import { Context } from '../../../Context';

function NavbarItem({path, title}) {
  const {open, setOpen} = useContext(Context)
    
  return (
    <li>
          <NavLink className={({isActive}) =>
                    isActive ? "text-red-600": 'hover:text-red-600 transition-colors duration-300'
                } to={path} onClick={()=>{

            {setOpen(false)}
          }}>
            {title}
          </NavLink>
        </li>
  )
}

export default NavbarItem