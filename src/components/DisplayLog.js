import React from 'react'
import formatTime from '../utils/formatTime'

class DisplayLog extends React.Component{
    renderEmpty = () => {
        return <span className="empty-log">--没有记录的数据--</span>
    }
    renderLog = () => {
        return this.props.log.map( (item,i) =>{
            return <li key={i} className="empty-log">{formatTime(item)}</li>
        })
    }
    render(){
        const listLog =this.props.log.length === 0 ? this.renderEmpty() : this.renderLog();
        return(
            <ul className="log">
                {listLog}
            </ul>
        )
    }
}

export default  DisplayLog;