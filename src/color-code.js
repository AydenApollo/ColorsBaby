import { Component } from 'react'

class Color extends Component {
    render() {
        console.log('Rendering Colors:',  this.props.color);
        const { red, green, blue } = this.props.color;
        return (
            <div className="allColors">
                {<div className="" style={{backgroundColor: `rgb(${red} ${green} ${blue})`, width: '200px', height: '200px'}}></div>}
                {<div className="" style={{backgroundColor: `rgb(${green} ${red} ${blue})`, width: '200px', height: '200px'}}></div>}
                {<div className="" style={{backgroundColor: `rgb(${red} ${blue} ${green})`, width: '200px', height: '200px'}}></div>}
                {<div className="" style={{backgroundColor: `rgb(${blue} ${green} ${red})`, width: '200px', height: '200px'}}></div>}
                {<div className="" style={{backgroundColor: `rgb(${blue} ${red} ${green})`, width: '200px', height: '200px'}}></div>}
                {<div className="" style={{backgroundColor: `rgb(${green} ${blue} ${red})`, width: '200px', height: '200px'}}></div>}
            </div>
        )
    }
}

export default Color