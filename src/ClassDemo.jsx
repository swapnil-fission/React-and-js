import React from 'react';

class ClassDemo extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {brand: 'Ford',date: new Date()};
       
    }

    componentDidMount() { this.timerID =
        setInterval(() => { 
            this.setState({
            date: new Date()
            })
            },3000
            );
        }
        componentWillUnmount() {
            clearInterval(this.timerID);
          }
    handleClick = () => {this.setState({brand:"BMW"});
    }
    render(){
        return (
         <div>
             <h3 onClick={this.handleClick}>hey {this.state.brand} THIS IS CLASS COMPONENT</h3>
             <h1>Todays date and time <br/> {this.state.date.toLocaleString()}</h1>
         </div>   
        );
    }
}

export default ClassDemo;