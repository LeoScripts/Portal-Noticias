
import './index.scss'

import newsImg from '../../public/img/news.png'

export function Header(){
    return (
        <header>
          <a href="/">
            <img className='logo' src={newsImg} alt="" />
          </a>
          <nav>
            
            <a href="http://localhost:3000">Leandro Cavalcante</a>
          </nav>
          <a href="http://localhost:3000">About</a>
        </header>
    )
}
