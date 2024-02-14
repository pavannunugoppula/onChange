import {Component} from 'react'


import './index.css'



class LettersCalculator extends Component {
    state={
        searchInput:"",
    }
    onChangeSearchInput=(event)=>{
        const{result}=event.target

        this.setState({searchInput:result})
    }
 
}
  render() {
      const{searchInput}=this.state

    return (

      <div className="App-container">
        <div className="content-container">
          <h1 className="head">
            Calculate the <br />
            letters you
            <br />
            Enter
          </h1>
          <p className="para">Enter the phrase</p>
          <input
            value={searchInput}
            onChange={this.onChangeSearchInput}
            type="text"
            placeholder="Enter the phrase"
            className="input"
          />
          <p className="lettersCount">Letters Count :{inputSearch.length}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="Letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
