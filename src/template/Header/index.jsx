
import './index.scss'

import newsImg from '../../public/img/news.png'

export function Header(){
    return (
        <header>
          <a href="http://localhost:3000">
            <img className='logo' src={newsImg} alt="" />
          </a>
          <nav>
            <a href="http://localhost:3000">GitHub</a>
            <a href="http://localhost:3000">Linkedin</a>
            <a href="http://localhost:3000">About</a>
          </nav>
          <a href="http://localhost:3000">Menu</a>
        </header>
    )
}
