import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar (props){

  

   let navbar_toggler = props.navbar_togglerProps


  return (
    <nav>
      <div className="brand_and_toggle">
        <div className="brand_name">DRESS PRO</div>
        <div className="cc">
          <div className="social mobile">
            <Link to="/cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              
            </Link>
          </div>
          <div className="toggle" onClick={navbar_toggler}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="links_div">
        <ul>
          <li className="links">
            <Link to="/">Products</Link>
          </li>
          <li className="links">
            <Link to="/customer">Customers Review</Link>
          </li>
          <li className="links">
            <Link to="/about">About Us</Link>
          </li>
          <li className="links">
            <Link to="/policy">Company Policy</Link>
          </li>
        </ul>
      </div>
      <div className="social">
        <Link to="/cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          {"\u00A0"} CART
        </Link>
        <a
          href="https://www.instagram.com/dress.pro_"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-user"></i>
          {"\u00A0"} OLABANJI
        </a>
      </div>
    </nav>
  );
}