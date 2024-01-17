import style from '../css/home.module.css'
import img from '../images/front.jpeg'
function Home(){
    return (
        <div className={style.margi}>
            <div className={style.main}>
                
                <div>
                    <img  className={style.img}
                    src={img}/>
                </div> 

                <div className={style.left}>
                    <h1>Hey I am Dinesh....🙋‍♂️</h1>
                    <h3>I'm a B.Tech student at VIT, majoring in computer science 🧑‍💻. My passion lies in front-end development ,Full-Stack Development, software Development, machine learning, and cloud computing. I'm committed to staying at the forefront of technology, constantly adapting, and exploring emerging tech. Together, let's create, innovate, and shape the future.</h3>   
                    <div className={style.pea} >
                    <a href='sriharidinesh.pdf' download='sriharidinesh.pdf' >
                <div className={style.btn}>
                    <p className={style.txt}>Resume</p>
                    <div>
                <svg className={style.txt} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                 <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                 <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                </div>
                </div>
                    </a>
                    </div>
                </div> 
            </div>
           
           
            
            
            
        </div>
    )
}
export default Home;
