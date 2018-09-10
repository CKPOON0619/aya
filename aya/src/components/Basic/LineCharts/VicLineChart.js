import React, { Component } from 'react';
import {VictoryLine, VictoryTheme, VictoryChart} from 'victory';


class VicLineChart extends Component {

  constructor(props){
    super(props)
  }

  render(){ return <VictoryChart
    theme={VictoryTheme.material}
  >
    {this.props.valKeys.map((valKey,key)=><VictoryLine
      key={key}
      animate={{
        duration: 1000,
        onLoad: { duration: 1000 }
      }}
      style={{
        data: { stroke: this.props.color[key] },
        parent: { border: "1px solid #ccc"}
      }}
      data={this.props.data.map(r=>({x:r[this.props.X],y:r[valKey]}))}
    />)}
  </VictoryChart>}
}

export default VicLineChart