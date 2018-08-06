import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
}   from 'react-router-dom';
// import { Router };

import { fetchRandomData } from './data';
import { fetchRandomData02 } from './data02';
import AboutMe from './AboutMe';
import PageButton from './pageButton';


import './App.css';
class App extends Component {
  state = {
    data: [],
    data02:[] ,
    indexList:[],//当前渲染的页面数据
    current: 1, //当前页码
    pageSize:4, //每页显示的条数
    goValue:0,  //要去的条数index
    totalPage:0,//总页数   
  }
   //设置内容
   setPage = (num) =>{
    this.setState({
        indexList:this.state.data.slice(num,num+this.state.pageSize)
    })
}

pageNext =(num)=> {
    this.setPage(num)
}
 
  componentDidMount(){
    this.fetchData();
    
  }

  fetchData = () =>{
    fetchRandomData()
    .then((res) => {
      this.setState({
        data: res.data,
      });
      this.setState({
        totalPage:Math.ceil( this.state.data.length/this.state.pageSize),
      })
    this.pageNext(this.state.goValue)
    })
    .then(() => {
    }, (err) => {
      console.error(err);
    });
  }

  fetchData02 = () =>{
    fetchRandomData02()
    .then((res) => {
      this.setState({
        data02: res.data
      });
    console.log(this.state.data02)
    })
    .then(() => {
    }, (err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
                <div>
        {   
            this.state.indexList.map((date,index)=>{
            return (<p key={index} > <Link  to={`/detail/${date.id}`} > {date.title} </Link></p>)})
        }
                </div>
            <PageButton { ...this.state } pageNext={this.pageNext} />
      </div>
    );
  }
}

export default App;

