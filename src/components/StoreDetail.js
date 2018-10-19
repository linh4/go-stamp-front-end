import React, {Component} from 'react'
import DealCollection from '../containers/DealCollection'

class StoreDetail extends Component{
  render(){
    return(
      <div>
        < DealCollection deals={this.props.deals} clickDeal={this.props.clickDeal}/>
      </div>
    )
  }
}

export default StoreDetail
