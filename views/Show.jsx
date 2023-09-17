const React = require("react")
const Pokemon = require('../models/pokemon');

    
    class Show extends React.Component {
        render () {
            const { name, evolved, img} = this.props.Pman
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };
        return (
            <div style={myStyle}>
            <h1> 'Gotta Catch 'Em All!'</h1>
            <h2>                       </h2>
            <div>
        The {name} is {
          evolved ? 
            "Is evolved!"
          :
            "Is not evolved"
        }
        </div>
       
        <img src={img} alt="" />
      </div>
    );
  }
}

    module.exports = Show
    

            
        

















          
        


