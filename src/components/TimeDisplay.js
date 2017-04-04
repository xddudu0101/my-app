import  React from 'react'
import DisplayLog from './DisplayLog'
import Button from './Button'
import formatTime from '../utils/formatTime'

class  TimeDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            on: false,
            log: [],
        }
    }
    handleToggle(){
        if(this.state.on){
            clearInterval(this.tiemer);
        }else{
            this.tiemer = setInterval(() => this.setState({
                time:this.state.time+1,
            }),500);
        }
         this.setState({on:!this.state.on})
    }
    handleReset = () =>{
        this.setState({
            time:0,
            on:true,
        })
    }
    handleLogTime = () => {
        this.state.log.push(this.state.time)
    }
    handleClear = () => {
        this.setState({log:[]})
    }
    render(){
        var time = formatTime(this.state.time);

        return(
            <div>
                <h1 className="display-time">{time}</h1>
                <div className="controls">
                        <Button className="success" text={this.state.on ? '暂停' : '开始'} onClick={this.handleToggle.bind(this)} />
                        <Button className="warning" text="重置" onClick={this.handleReset} />
                        <Button className="primary" text="记录" onClick={this.handleLogTime} />
                        <Button className="undefined" text="清空" onClick={this.handleClear} />
                    </div>
                    <DisplayLog  time={this.state.time} log={this.state.log} />
            </div>
        )
    }
    componentDidMount(){
        window.addEventListener('keyDown',e => e.preventDefault());
        window.addEventListener('keyUp',e => {
            e.preventDefault();
            switch (e.keyCode) {
                case 32:
                    this.handleToggle();
                    break;
                case 82:
                    this.handleReset();
                    break;
                case 13:
                    this.handleLogTime();
                    break;
                case 67:
                    this.handleClear();
                    break;
                default:
                    break;
            }
        });
    }
    //组件被移除，时间监听取消
    componentWillUnmount(){
        window.removeEventListener('keyDown');
        window.removeEventListener('keyUp');

    }
}



export default TimeDisplay;