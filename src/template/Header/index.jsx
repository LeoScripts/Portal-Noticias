
import './index.scss'

import newsImg from '../../public/img/news.png'

export function Header(){
    return (
        <header>
          <div>
          <nav className="header">
            <a className='link-container' href="/">
              <div className='logo-container' >
                <h1 className='logo'><img className='logo-img' src={newsImg} alt="" /> Portal De Noticias</h1>
              </div>
            </a>

            <a className='contato' href="https://www.linkedin.com/in/leoscripts/">Contato</a>
          </nav>
          </div>
        </header>
    )
}
