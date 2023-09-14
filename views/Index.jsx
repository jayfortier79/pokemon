const React = require("react")
const Pokemon = require('../models/pokemon');

    
    class Index extends React.Component {
        render () {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };
        return (
            <div style={myStyle}>
            <h1> 'See All The Pokemon!'</h1>
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
            </div>
            )}}

    module.exports = Index
    

            
        

















          
        


