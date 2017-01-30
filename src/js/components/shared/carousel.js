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
      return  {                       
          backgroundImage: "url(" + file + ")"   ,
          marginLeft:  this.getLeftPosition(index) +"px"      
      };
  }

  getDefaultStyle(){   
    
      let file = this.props.defaultImage;
     
      return  {                       
          backgroundImage: "url(" + file + ")"   
            
      };
  }

  getLeftPosition(index){
      let padding = 20; //should read css for this
      let width = document.querySelector('div.md-modal').clientWidth - (padding * 2);
      let left = index == 0 ? (width * index) - (width * this.state.currentPage) : 0;

      return left;
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
    
     
    }
  }
 
  onSwipeRight() {
     if(!this.isSwiping){
      this.isSwiping = true;
      if( this.state.currentPage > 0 ){
          this.setState({currentPage: this.state.currentPage - 1});   
      }
      
     }
  }

  onSwipingEnd(){
   
    this.isSwiping = false;
  }

  renderPagination(){
     if(this.props.items.length <=1) return;
     return <ul className="pagination">
            {this.props.items.map((item, i) =>
                <li 
                  key={i}                   
                  className={(this.state.currentPage === i ? 'ion-record' : 'ion-ios-circle-outline')} 
                  onClick={this.goto.bind(this, i)}
                ></li>
              )}   
        </ul> 
  }

  renderItems(){
    if(this.props.items) {  
    
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
                    ><a className='view ion-eye' href={'/imgs/brands/'+this.props.refs+'/'+ item.image} target="_blank"></a></li>
                  )}     
            </ul> 
          </Swipeable >
          {this.renderPagination()}
        </div>
        );

    }else{
      
      return (
        <div>
          <ul className="images">
            <li  className="defaultImage" style={this.getDefaultStyle()} ></li>
          </ul> 
        </div>
      )
    }
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