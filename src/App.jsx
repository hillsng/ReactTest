import React, { Component } from 'react';
import './App.css';
import { ProductDetails } from './component/ProductDetails';

class App extends Component {

  constructor() {
    super();
    this.state = {
      color: '1',
      text: 'ADD TO CART',
      message: ''
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    this.setState({
      text: 'Loading...'
    });

    this.change = setTimeout(() => {
      this.setState({
        text: "View Cart",
        message: 'Item added to cart!'
      })
      // alert('Item added to cart!');
    }, 2000)
  }

  handleColorChange = (e) => {
    // Gets color
    const color = e.target.value;

    this.setState({
      color
    });
  }

  render() {
    const { message } = this.state;
    return (
      <header className="App-header">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-sm-12 col-md-6 layout1">
                <div className="backPage">
                  <span><img src={"/backspace-24px.svg"} alt=""/>All Product</span>
                </div>
                <div className="productDes">
                  <h1>Audio- Technica ATH-MSR7</h1>
                  <span>2017 Best Headphones of the year award winner</span>
                </div>
                  <div className='tabView'>
                    <ProductDetails />
                 </div>
                 <div className="PriceView">
                  <h4>$59.99 <span>$89.99</span></h4>
                </div>
                <div className="colorTab">
                  <span>COLORS</span>
                  <select className="custom-select" onChange={this.handleColorChange}>
                    <option selected value="1"></option>
                    <option value="1">Black</option>
                    <option value="2">Brown</option>
                  </select>
                </div>
                <div className="btn-cart form-row">
                  <button onClick={() => { this.changeText() }}> {this.state.text}</button>
                  <span className="showmessage">{message}</span>
                </div>
        
              </div>
              <div className="col-sm-12 col-md-6 layout2">
                {this.state.color === '1'
                  ? <img src={"./ath-msr7-black.png"} alt="itemPhoto" />
                  : <img src={"./ath-msr7-brown.png"} alt="itemPhoto" />
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;