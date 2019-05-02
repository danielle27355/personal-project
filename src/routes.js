import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import CharacterForm from './Components/CharacterForm/CharacterForm';
import Start from './Components/GamePages/Start';
import Kitties from './Components/Kitties/Kitties';
import Donate from './Components/Donate/Donate';
import SignUp from './Components/Authentication/SignUp.js'
import LogIn from './Components/Authentication/LogIn.js'

import One from './Components/GamePages/FirstStep/One.js';

import Two from './Components/GamePages/SecondStep/Two.js';
import Three from './Components/GamePages/SecondStep/Three';

import Four from './Components/GamePages/ThirdStep/Four';
import Five from './Components/GamePages/ThirdStep/Five';
import Six from './Components/GamePages/ThirdStep/Six';
import Seven from './Components/GamePages/ThirdStep/Seven';

import Eight from './Components/GamePages/FourthStep/Eight.js';
import Nine from './Components/GamePages/FourthStep/Nine';
import Ten from './Components/GamePages/FourthStep/Ten';
import Eleven from './Components/GamePages/FourthStep/Eleven';
import Twelve from './Components/GamePages/FourthStep/Twelve';
import Thirteen from './Components/GamePages/FourthStep/Thirteen';
import Fourteen from './Components/GamePages/FourthStep/Fourteen';
import Fifteen from './Components/GamePages/FourthStep/Fifteen';

// import Sixteen from './Components/GamePages/FifthStep/Sixteen';
// import Seventeen from './Components/GamePages/FifthStep/Seventeen';
// import Eighteen from './Components/GamePages/FifthStep/Eighteen';
// import Nineteen from './Components/GamePages/FifthStep/Nineteen';
// import Twenty from './Components/GamePages/FifthStep/Twenty';
// import Twentyone from './Components/GamePages/FifthStep/Twentyone';
// import Twentytwo from './Components/GamePages/FifthStep/Twentytwo';
// import Twentythree from './Components/GamePages/FifthStep/Twentythree';
// import Twentyfour from './Components/GamePages/FifthStep/Twentyfour';
// import Twentyfive from './Components/GamePages/FifthStep/Twentyfive';
// import Twentysix from './Components/GamePages/FifthStep/Twentysix';
// import Twentyseven from './Components/GamePages/FifthStep/Twentyseven';
// import Twentyeight from './Components/GamePages/FifthStep/Twentyeight';
// import Twentynine from './Components/GamePages/FifthStep/Twentynine';
// import Thirty from './Components/GamePages/FifthStep/Thirty';
// import Thirtyone from './Components/GamePages/FifthStep/Thirtyone';

import Winner from './Components/Winner/Winner.js';
import Loser from './Components/Loser/Loser.js';

export default (
    <Switch>
        {/* Nav bar */}
        <Route exact path="/" component={Home} />

        {/* Home screen */}
        <Route path="/character" component={CharacterForm} />
        <Route path="/kitties" component={Kitties} />
        <Route path="/donate" component={Donate} />

        {/* Log In */}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />

        {/* Starting game */}
        <Route path="/startgame" component={Start} />

        {/* Step one */}
        <Route path="/1" component={One} />
         
         {/* Step two */}
         <Route path="/2" component={Two} />
         <Route path="/3" component={Three} />

         {/* Step three */}
         <Route path="/4" component={Four} />
         <Route path="/5" component={Five} />
         <Route path="/6" component={Six} />
         <Route path="/7" component={Seven} />

         {/* Step four */}
         <Route path="/8" component={Eight} />
         <Route path="/9" component={Nine} />
         <Route path="/10" component={Ten} />
         <Route path="/11" component={Eleven} />
         <Route path="/12" component={Twelve} />
         <Route path="/13" component={Thirteen} />
         <Route path="/14" component={Fourteen} />
         <Route path="/15" component={Fifteen} />

         {/* Step five */}
         {/* <Route path="/16" component={Sixteen} />
         <Route path="/17" component={Seventeen} />
         <Route path="/18" component={Eighteen} />
         <Route path="/19" component={Nineteen} />
         <Route path="/20" component={Twenty} />
         <Route path="/21" component={Twentyone} />
         <Route path="/22" component={Twentytwo} />
         <Route path="/23" component={Twentythree} />
         <Route path="/24" component={Twentyfour} />
         <Route path="/25" component={Twentyfive} />
         <Route path="/26" component={Twentysix} />
         <Route path="/27" component={Twentyseven} />
         <Route path="/28" component={Twentyeight} />
         <Route path="/29" component={Twentynine} />
         <Route path="/30" component={Thirty} />
         <Route path="/31" component={Thirtyone} /> */}

        <Route path="/winner" component={Winner} />
        <Route path="/loser" component={Loser} />


    </Switch>
)