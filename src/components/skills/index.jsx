import useImage from "../../hooks/useImage";
import "./skills.scss";

function Skills (props) {
    const image = useImage(props.src);

    return (
        <div className="skill">
            <img className="skill_logo" src={image} alt={props.name}/>
            <p className="skill_name">{props.name}</p>
        </ div>
    )
};

export default Skills