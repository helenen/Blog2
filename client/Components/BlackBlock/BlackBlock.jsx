import React from 'react';
import './BlackBlock.scss';



class BlackBlock extends React.Component {
constructor(){
  super();
  this.state={

  };
}
  render() {
    return (
      <div>
        <div className="blackBlock-container">
          <div className="text-blackBlock">
            <h1>{this.props.author}</h1>
            <p className="text">{this.props.quote}</p>
          </div>
        </div>
      </div>
    );
  }

}

export default BlackBlock;
