import React from 'react'

function Layout({children}) {
  return (
    <div className='flex justify-around mt-10 items-center mx-auto flex-col lg:flex-row'>
        {children}
    </div>
  )
}

export default Layout