import Axios from './api';
import Kerinci from './api-kerinci';
import data from './data';
import Harau from './api-harau';
import Kalio from './api-kalio'

function dynamic(){
    return(
        <div className='atas2'>
            {data.map(createroute)}
        </div>
    )
}
function createroute(props){
    return(
        <div data-aos={props.aos} data-aos-duration="2000" data-aos-delay="500">
            <div className={props.class}>
                <br />
                {props.api === "Axios" ? <Axios /> : null}
                {props.api === "Kerinci" ? <Kerinci /> : null}
                {props.api === "Kalio" ? <Kalio /> : null}
                {props.api === "Harau" ? <Harau /> : null}
                <p>{props.prgf}</p>
                <br />
                <a href={props.halaman}> Explore more {">"} </a>
                <img id={props.idd} src={props.srcc} />
                <br />
                <br />
            </div>
        </div>
    )
}
export default dynamic;