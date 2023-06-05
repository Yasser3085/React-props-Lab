
import './App.css'
import Programmers from './component/Programmers'
import Companies from './component/Companies'

function App() {


  return (
    <div>
   <nav>
  <ul>
    <li><a >Home</a></li>
    <li><a >About</a></li>
    <li><a >Services</a></li>
    <li><a >Contact</a></li>
  </ul>
</nav>
<div className='div-box'> <h1>Programmers</h1>
<div className='prog-div'><Programmers name='  ahmed' languages=' C++ , Javascript' exp='4 Years' comp='Stc , Aramco' ></Programmers>

<Programmers name='  Fahad' languages=' Python , Javascript' exp='2  Years' comp='ntis , site' ></Programmers>

<Programmers name='  mohammed' languages=' Go , php' exp=' 6 Years' comp=' Aws ' ></Programmers></div>
</div>
<hr />
<div className='div-box'>

<h1>Companies</h1> <div className='prog-div'>
<Companies name='Stc' employee='8500' est='1960' ></Companies>
<Companies name='Aramco' employee='15000' est='1940' ></Companies>
<Companies name='Amazon' employee='28000' est='1985' ></Companies>


</div>
</div>


<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</p>
      </div>
      <div className="col-md-4">
        <h3>Latest News</h3>
        <ul>
          <li><a href="#">Lorem ipsum dolor sit amet</a></li>
          <li><a href="#">Consectetur adipiscing elit</a></li>
          <li><a href="#">Sed do eiusmod tempor</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Contact Us</h3>
        
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default App
