import React, {Component} from "react";
import "./CharacterForm.css";
import axios from "axios";
import {connect} from "react-redux";
import {setCharacter} from "../../ducks/reducer"

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
        this.createCharacter = this.createCharacter.bind(this);
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

    createCharacter(){
        let {fullName, emotions, demeanor, social} = this.state;
        axios.post("/character", {fullName, emotions, demeanor, social}).then(res => {
            console.log(res.data)
            this.props.setCharacter(res.data)
        })
    } 
    displayUserCharacters(){
        axios.get("/characterlist").then(res =>{
            console.log(res.data)
            this.displayUserCharacter(res.data)
        })
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
                    <div>
                <label>Emotional Peronsality:</label>
                <select className="emotions" value={this.state.emotions} onChange={this.handleChangeEmotions}>
                    <option></option>
                    <option>Broken</option>
                    <option>Happy</option>
                    <option>Content</option>
                </select>
                </div>
                <div>
                <label>Demeanor:</label>
                <select className="demeanor" value={this.state.demeanor} onChange={this.handleChangeDemeanor}>
                    <option></option>
                    <option>Relaxed</option>
                    <option>Cheerful</option>
                    <option>Gloomy</option>
                </select>
                </div>
                <div>
                <label>Social Personality:</label>
                <select className="social" value={this.state.social} onChange={this.handleChangeSocial}>
                    <option></option>
                    <option value="Talkative">Talkative</option>
                    <option value="Average">Average</option>
                    <option value="Quiet">Quiet</option>
                </select>
                </div>
                </div>
                <div>
                    <button onClick = {this.createCharacter}>Submit character</button>
                    <button><a href="/startgame">Start Game!</a></button>
                </div>                   
            </div>
        )
    }
}

let mapStateToProps = state => {
    return{
        character: state.character 
    }
}

let mapDispatchToProps = {
    setCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);