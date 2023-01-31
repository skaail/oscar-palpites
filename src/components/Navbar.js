import React from 'react'

function Navbar() {
  return (
    <nav className='navigation'>
        <a href='/' className='deconone'>Oscar Picks</a>
        <div
        className="navigation-menu">
        <ul>
          <li>
            <a className='deconone' href="/picks">Picks</a>
          </li>
          <li>
            <a className='deconone' href="/ranking">Ranking</a>
          </li>
          <li>
            <a className='deconone' href="/perfil">Perfil</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar