import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./CharacterForm.css";

export class CharacterForm extends Component{
    constructor(){
        super();
        this.state = {
            fullName: "",
            emotions: "",
            demeanor: "",
            social: ""
        }
        this.handleChangeEmotions = this.handleChangeEmotions.bind(this);
        this.handleChangeDemeanor = this.handleChangeDemeanor.bind(this);
        this.handleChangeSocial = this.handleChangeSocial.bind(this);
    }

    handleChangeEmotions(event){
        this.setState({emotions: event.target.value});
    }
    handleChangeDemeanor(event){
        this.setState({demeanor: event.target.value});
    }
    handleChangeSocial(event){
        this.setState({social: event.target.value});
    }


    render(){
        let {fullName, emotions, demeanor, social} = this.state;
        console.log(fullName, emotions, demeanor, social);

        return(
            <div className="addCharacter">

            <div>
                <h1>
                    Create your character:
                </h1>
            </div>
                <label>Character Name: </label>
                <input 
                type = "text"
                onChange = {event =>
                    this.setState({
                        fullName: event.target.value
                    })}
                />

                <div>
                <select className="emotions" value={this.state.emotions} onChange={this.handleChangeEmotions}>

                    <option></option>
                    <option>Broken</option>
                    <option>Happy</option>
                    <option>Content</option>
                </select>
                <select className="demeanor" value={this.state.demeanor} onChange={this.handleChangeDemeanor}>
                    <option></option>
                    <option>Relaxed</option>
                    <option>Cheerful</option>
                    <option>Gloomy</option>
                </select>
                <select className="social" value={this.state.social} onChange={this.handleChangeSocial}>
                    <option></option>
                    <option value="Talkative">Talkative</option>
                    <option value="Average">Average</option>
                    <option value="Quiet">Quiet</option>
                </select>
                </div>
                <div>
                    <button><a href="/#/startgame">Start Game!</a></button>
                    {/* <button><a href="#/kitties">View Kitty Pictures</a></button> */}
                </div>                   
            </div>
        )
    }
}

export default CharacterForm;