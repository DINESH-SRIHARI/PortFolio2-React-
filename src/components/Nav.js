import style from '../css/nav.module.css';
import { Link } from 'react-router-dom';
import img from '../images/logod.png'
function Nav() {
    return (
      <div className={style.nav}>
        <div>
            <Link to='/'  ><img src={img} className={style.img}/>
                <h1 className={style.name}>  Srihari  Dinesh</h1>
            </Link>
        </div>
        <div className={style.bar}>
          <Link to='/about' className={style.hov}>About</Link>
          <Link to='/P' className={style.hov}>projects</Link>
          <Link to='/C' className={style.hov}>contact</Link>
        </div>


        
      </div>
    );
  }   
export default Nav; 
  