import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter,faFacebook,faInstagram,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import style from '../css/profiles.module.css'
function Profiles(){
    return(
        
            <div className={style.sticky}>
          <a href='https://www.facebook.com/srihari.dinesh.5?mibextid=ZbWKwL'>
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.instagram.com/im_s_dinesh_/'>
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://github.com/DINESH-SRIHARI'>
          <FontAwesomeIcon icon={faGithub} />
          </a >
          <a href='https://www.linkedin.com/in/enduvasi-srihari-dinesh-7111a1226/'>
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://x.com/srihariDinesh9?t=r7akpvpuA7C_HrTne5SR8g&s=09'>
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        
    );
}
export default Profiles; 