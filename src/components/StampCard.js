import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class StampCard extends Component{

  render(){
    return(
    <div className="each-stampcard">
      {/* start card */}
      <div className="ui card">
        <div className="content">
          <div className="header">
            <span className="left floated">
              <Link to={`/stamp_card_confirmation/${this.props.stamp_card.deal.id}`}>
                <i  className="key icon link"></i>
              </Link>
            </span>
            <span>
              {this.props.stamp_card.store.name}
            </span>
          </div>
          <div className="description">
            <div><p>Deal: {this.props.stamp_card.deal.category}</p></div>
          </div>
        </div>

        <div className="extra content">
          {/* grid? */}
          <div className="ui grid">
            <div className="three column row">
              <div className="column">
                <div className="ui segment">
                  {this.props.stamp_card.current_points > 0 ? (<i className="star icon circular teal"></i>) : (<i className="circle blank icon circular "></i>)}
                </div>
              </div>
              <div className="column">
                <div className="ui segment">
                  {this.props.stamp_card.current_points > 1 ? (<i className="star icon circular teal"></i>) : (<i className="circle blank icon circular "></i>)}
                </div>
              </div>
              <div className="column">
                <div className="ui segment">
                  {this.props.stamp_card.current_points > 2 ? (<i className="star icon circular teal"></i>) : (<i className="circle blank icon circular"></i>)}
                </div>
              </div>
            </div>

            <div className="three column row">
              <div className="column">
                <div className="ui segment">
                  {this.props.stamp_card.current_points > 3 ? (<i className="star icon circular teal"></i>) : (<i className="circle blank icon circular "></i>)}
                </div>
              </div>
              <div className=" column">
                <div className="ui segment">
                  {this.props.stamp_card.current_points > 4 ? (<i className="star icon circular teal"></i> ): (<i className="circle blank icon circular "></i>)}
                </div>
              </div>
              <div className=" column">
                <div className="ui segment">
                  {this.props.stamp_card.current_points > 5 ? (<i className="star icon circular teal"></i>) : (<i className="circle blank icon circular "></i>)}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* end card */}
    </div>
    )
  }
}

export default StampCard
