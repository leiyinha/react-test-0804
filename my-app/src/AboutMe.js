import React, { Component } from 'react';
import { fetchRandomData02 } from './data02';
export default class AboutMe extends Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this);
    }

    
    componentDidMount(){
      this.fetchData02()
    //   console.log(this.props.match.params.id)
     
    }
    goBack(){
        this.props.history.goBack() 
        }
    state = {
      data02:[]
    }
    handle =()=>{
      this.props.history.goBack();

    }
    fetchData02 = () =>{
      fetchRandomData02(this.props.match.params.id)
      .then((res) => {
        this.setState({
          data02: res.data
        });
        console.log(this.props.location.pathname.length)
      console.log(this.state.data02.url)
      })
      .then(() => {
      }, (err) => {
        console.error(err);
      });
    }
    render(){
      return (
        <div className="App"> 
                  <div dangerouslySetInnerHTML={{ __html: this.state.data02.content }}></div>
                  <button onClick={()=>{this.goBack()}} >返回</button>
        </div>
      )
    }
  }