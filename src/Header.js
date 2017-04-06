import React from 'react'

import './Header.css'

export const Header = () =>
  <header className='github-issues-header'>
    <img
      className='github-issues-header__logo'
      src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Github"
    />
  </header>

Header.displayName = 'Header'
