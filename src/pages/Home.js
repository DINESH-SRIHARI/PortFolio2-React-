import { useEffect } from 'react';
import Typed from 'typed.js';
import style from '../css/home.module.css';
import img from '../images/front.jpeg';

function Home() {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['a MERN Developer 🌐', 'a Data Scientist 📶'],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className={style.margi}>
      <div className={style.main}>
        <div>
          <img className={style.img} src={img} alt="Profile" />
        </div>

        <div className={style.left}>
        <h1>Hey I am <span className='multiple-text' style={{ color: 'aqua' }}>Dinesh....🙋‍♂️</span></h1>

          <h3 style={{ marginLeft: '6px' }}>
            I'm a B.Tech Final year student at VIT, majoring in computer science 🧑‍💻. My passion lies in front-end development,
            <span style={{ color: 'aqua' }}>Full-Stack Development🛢️</span>, software Development📱, <span style={{ color: 'aqua' }}>Machine learning🤖</span>, and Dev-Ops. I'm committed to staying
            at the forefront of technology, constantly adapting, and exploring emerging tech.  Currently, I am gaining hands-on experience as a <span style={{ color: 'aqua' }}>Backend Developer🔧</span>  at <span>TericSoft🏢</span>, where I contribute to building robust and scalable backend systems. This role not only enhances my technical skills but also instills in me a mindset of innovation and collaboration, driving me to shape the future of technology with creativity and dedication.
            






          </h3>
          <div className={style.pea}>
            <a href='SRIHARI_DINESH_Resume.pdf' download='SRIHARI_DINESH_Resume.pdf'>
              <div className={style.btn}>
                <p className={style.txt}>Resume</p>
                <div>
                  <svg className={style.txt} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
