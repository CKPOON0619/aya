import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React, { Component } from 'react';
class ReLineChart extends Component {

    constructor(props){
      super(props)
    }
  
    render(){ 
        return <LineChart width={400} height={400} data={this.props.data} animationDuration={1000}>
            {this.props.valKeys.map((valKey,key)=><Line 
                type="monotone" 
                dataKey={valKey}
                stroke={this.props.color[key]} 
            />)}
            <CartesianGrid stroke="#ccc" animationDuration={1000}/>
            <Tooltip />
            <XAxis dataKey={this.props.X} />
            <YAxis />
        </LineChart>
    }
}

export default ReLineChart;