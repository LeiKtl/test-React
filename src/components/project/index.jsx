import { useState } from 'react';
import './project.scss';
import { Link } from 'react-router-dom';
import useImage from '../../hooks/useImage';

function Project (props) {
    const [isClosed, setIsClosed] = useState(true);
    const image = useImage(props.src);

    function handleModal () {
        setIsClosed(!isClosed)
    };

    return (
    <section className={isClosed ? 'container container-borderBottom' : 'container'} >
        { isClosed ? 
        <div className='container_project' onClick={handleModal} >
                <span className='container_project_number'>{props.numb}</span>
                <div className='container_project_info'>
                    <h3 className='container_project_title'>{props.title}</h3>
                    <div className='container_project_title-div'>/see more
                        <div className="container_project_title-div-arrow">
                            <div className="container_project_title-div-arrow1"></div>
                            <div className="container_project_title-div-line"></div>
                            <div className="container_project_title-div-arrow2"></div>
                        </div>
                    </div>
                </div>        
        </div>
        : <div className='container_modalProject'>
            <div className="container_modalProject_header">
                <div className='container_modalProject_header-title'>
                    <span>{props.numb}</span>
                    <h3>{props.title}</h3>
                </div>
                <div className="container_cross" onClick={handleModal}>
                    <div className='container_cross-close'></div>
                </div>
            </div>
            <div className='container_modalProject_content'>
                <div className='container_modalProject_description'>
                    <img src={image} alt="" className='container_modalProject_description-img'></img>
                    <p className='container_modalProject_description-text'><span className='container_modalProject_description-text-highlight'>{props.formation}</span><br/>{props.content}</p>
                </div>
                <div className='container_modalProject_links'>
                    {
                        props.codeLink ? <Link to={props.codeLink} className='container_modalProject_link'>Voir code</Link> 
                        : <></>
                    }
                    {
                        props.siteLink ? <Link to={props.siteLink} className='container_modalProject_link'>Voir site</Link>
                        : <></>
                    }        
                </div>
            </div>
        </div>
        }
    </ section> 
    )
};

export default Project;