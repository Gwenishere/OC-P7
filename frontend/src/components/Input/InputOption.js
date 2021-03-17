import React from 'react'
import './InputOption.css'

function InputOption({Icon, title, color, width, height }) {
    return (
        <div className="inputOption">
            <Icon style={
                { color: color,
                  width: "24px",
                  height: "24px"
                }
            }/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
