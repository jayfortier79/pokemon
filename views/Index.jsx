const React = require("react")
const DefaultLayout = require('./layout/default');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
    class Index extends React.Component {
        render () {
        const {pokemons} = this.props   
        return (
            <div style={myStyle}>
            <h1> 'See All The Pokemon!'</h1>
            <ul>
           {
            pokemons?.map((Pman, i) => {
                return (
                  <li key={i}>
                    The{' '}
                    <a href={`/pokemon/${Pman._id}`}>
                      {Pman.name.toUpperCase()}
                    </a>
                    {
                      Pman.evolved ?
                        `Is evolved`
                        :
                        `Is not evolved`
                    }
                    </li>
                    )
              })
            }
            </ul>
                    </div>
          )
        }
      }       
                 
            
                 
            
        

    module.exports = Index
    

            
        

















          
        


