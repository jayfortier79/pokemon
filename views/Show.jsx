const React = require("react")
const Pokemon = require('../models/pokemon');

    
    class Show extends React.Component {
        render () {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };
        return (
            <div style={myStyle}>
            <h1> 'Gotta Catch 'Em All!'</h1>
            <h2>                       </h2>
            <ul>
           {
            Pokemon.map((Pman, i) => {
                return (
                  <li key={i}>
                    The{' '}
                    <a href={`/pokemon/${Pman._id}`}>
                      {Pman.name.toUpperCase()}
                    </a>
                </li> 
                
                )
                
                 })
           } 
                 </ul>
                 <img src='https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png' alt=""/>  
                 <a href={'/pokemon'}>back</a>
            </div>
            )}}

    module.exports = Show
    

            
        

















          
        


