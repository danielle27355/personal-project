import React, {Component} from 'react';
import "./Kitties.css";
import { createRequireFromPath } from 'module';
// const dank1 = "s3://danielle27355-kitties/dank1.jpg";
const dank2 = "https://i.imgur.com/4V1ZGtW.jpg";


export class Kitties extends Component{


    render(){
        return(
            <div>


            <h1>Kitty pictures here</h1>
            <img src={dank2} />
        


            </div>
        )
    }
}

export default Kitties;