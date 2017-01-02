import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Swipeable  from 'react-swipeable';


class Carousel extends React.Component {

  constructor() {
    super();   
    this.state = { 
      currentPage: 0     
    }   	
    this.isSwiping = false;
  } 
  
  getStyle(item, index){   
    
      let file = '/imgs/brands/'+this.props.refs+'/'+ item.image
      let padding = 30; //should read css for this
      let width = document.querySelector('div.md-modal').clientWidth - (padding * 2);
      let left = index == 0 ? (width * index) - (width * this.state.currentPage) : 0;

      return  {                       
          backgroundImage: "url(" + file + ")"   ,
          marginLeft:  left +"px"      
      };
  }

  
  next(){
    let nextPage = this.props.items.length === this.state.currentPage + 1 ? 0 : this.state.currentPage + 1;   
    this.setState({currentPage: nextPage});    
  }


  goto(i){
    this.setState({currentPage: i});    
  }

  onSwipeLeft() {
    if(!this.isSwiping){
      this.isSwiping = true;
      if( this.state.currentPage < this.props.items.length - 1 ){
          this.setState({currentPage: this.state.currentPage + 1});   
      }
    
      console.log('Swipgin left');
    }
  }
 
  onSwipeRight() {
     if(!this.isSwiping){
      this.isSwiping = true;
      if( this.state.currentPage > 0 ){
          this.setState({currentPage: this.state.currentPage - 1});   
      }
      console.log('Swipgin right');
     }
  }

  onSwipingEnd(){
    console.log('End swiping');
    this.isSwiping = false;
  }

  renderItems(){
    if(!this.props.items) return;
    return (  
      <div>    
      <Swipeable 
        onSwipingLeft={this.onSwipeLeft.bind(this)}
        onSwipingRight={this.onSwipeRight.bind(this)}       
        onSwiped={this.onSwipingEnd.bind(this)}
        >   
          <ul className="images">
              {this.props.items.map((item, i) =>
                  <li 
                    key={i}                   
                    style={this.getStyle(item, i)} 
                    onClick={this.next.bind(this)}
                  ></li>
                )}     
          </ul> 
        </Swipeable >
        <ul className="pagination">
            {this.props.items.map((item, i) =>
                <li 
                  key={i}                   
                  className={"fa fa-circle-o " + (this.state.currentPage === i ? 'fa-circle selected' : '')} 
                  onClick={this.goto.bind(this, i)}
                ></li>
              )}   
        </ul> 
      </div>
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