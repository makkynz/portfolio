import React from 'react';

class Carousel extends React.Component {

  constructor() {
    super();   
    this.state = { 
      currentPage: 0 
    }
  } 
  
  getStyle(item, index){   
      let file = '/imgs/brands/'+this.props.refs+'/'+ item.image
      let left = index == 0 ? (570 * index) - (570 * this.state.currentPage) : 0;

      return  {                       
          backgroundImage: "url(" + file + ")"   ,
          marginLeft:  left +"px"      
      };
  }

  next(){
    let nextPage = this.props.items.length === this.state.currentPage + 1 ? 0 : this.state.currentPage + 1;   
    this.setState({currentPage: nextPage});    
  }

  renderItems(){
    if(!this.props.items) return;
    return (         
      <ul>
          {this.props.items.map((item, i) =>
              <li 
              key={i}                   
              style={this.getStyle(item, i)} 
              onClick={this.next.bind(this)}
              ></li>
            )}     
      </ul>               
      );
  }

  renderCaption(){
     if(!this.props.items) return;
      return (
        <div className="caption">{this.props.items[this.state.currentPage].caption}</div>   
      )
  }
  
  render() {     
    return (
      <div className="carousel">
       {this.renderItems()}
       {this.renderCaption()}
      </div>
    );
  }
}
export default Carousel;