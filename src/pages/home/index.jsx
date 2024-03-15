import './home.scss';
import Project from '../../components/project';
import { projectsList } from '../../datas/projectsList';
import { skillsList } from "../../datas/skillsList";
import Skills from '../../components/skills';

function Home () {
    return (
        <main className='home'>
            <h1 className='home_title'>Hi! I’m a <span className='home_title--highlight'>frontend</span> developer</h1>
            <p className='home_content'>Hi, I'm Leila Ketterle but people usually call me Lei, living in the north of France. I studied literature in High School and I always wanted to do a creative work. It's a movie -more like a serie- that made me curious of IT profession. After a lot of research, front-end developer's was a job which brought together several criteria such as creation, constant learning and diversity of tasks, which I wanted in my future profession. So i started to learn the basics of programmation by myself, and decided to start a training course with OpenClassrooms, to be able to have a certificate in this area and be able to  make it my job.</p>
            <div className='home_arrowCircle'>
                <div className='home_arrowCircle-arrow1'></div>
                <div className='home_arrowCircle-line'></div>
                <div className='home_arrowCircle-arrow2'></div>
            </div>
            
            <h2 className='home_works' id='work'>My work</h2>
            <p className='home_works--text'>( Click on a project to see more )</p>
            <section className='home_works--projects'>
                {projectsList.map(({id, number, title, description, picture, github, site, formation}) => (
                    <Project 
                        key={id}
                        numb={number}
                        title={title}
                        src={picture}
                        alt="*"
                        content={description}
                        codeLink={github}
                        siteLink={site}
                        formation={formation}
                    />
                ))}
            </section>
            <h2 className='home_skills' id='skills'>Skills</h2>
            <section className='home_skills_logos'>
                {skillsList.map(({id, logo, name}) => (
                    <Skills src={logo} key={id} name={name} />
                ))}
            </section>
        </main>
    )
};

export default Home;