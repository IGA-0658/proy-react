import React from 'react';

class Reloj extends React.Component {
    constructor(props) {
        super(props);
        //console.log("1. Constructor")
        this.state = { 
            hora: new Date().toLocaleTimeString()
         }

         this.temporizador = setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString() });
         }, 1000);
         
    }
    render() { 
       //console.log("2. render")
        return (  
            <div className="naranja">
                <h2>Reloj</h2>
                <h3>{this.state.hora}</h3>
            </div>
        );
    }
    componentDidMount() {
        //console.log("3. Did mount");
    }
    componentDidUpdate(prevProps, prevState) {
        //console.log("4. Did update");
        //console.log(prevProps, prevState);
    }
    componentWillUnmount() {
        //clearInterval(this.temporizador);
        console.log("5. Will unmount");
    }
    
}
 
export default Reloj;