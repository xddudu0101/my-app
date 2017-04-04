import React from 'react'

class Button extends React.Component{
    //静态属性给属性赋值默认值
    static defaultProps ={
            onClick: null,
            className: '',
            text:'默认',
    }
    render(){
        return (
            <div>
                <button className={`Button ${this.props.className}`}
                        onClick={this.props.onClick}
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
}





export  default  Button;
