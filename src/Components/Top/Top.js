import React from 'react';
import News from '../News/News';
import './Top.css' ;
import Axios from 'axios';

class Top extends React.Component{
    constructor(){
        super()
        this.state={
            id:[],
            news:[],
            stories:'topstories'
        }
    }
    async componentDidMount(){
        this.setState({
            id:[],
            news:[]
        })
        console.log('in component did mount')
        await Axios.get(`https://hacker-news.firebaseio.com/v0/${this.state.stories}.json?print=pretty`) 
        .then(res=>{
            // if(res.data.length)
            console.log(res.data.length)
             this.state.id.push(res.data)
            this.setState({
                id:this.state.id
            },()=>{        
                this.state.id[0].map((ele,index)=>{
                if(index<30){
                Axios.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json?print=pretty`)
                .then(res=>
                    {
                    this.state.news.push(res.data)
                    this.setState({
                        news:this.state.news
                    })
                    // console.log(res.data)
                })
            }})})
        })
        .catch(e=>console.log('error',e))
    }
    // async componentDidUpdate(){
    //     this.setState({
    //         id:[],
    //         news:[]
    //     })
    //     console.log('in component did update')
    //    await Axios.get(`https://hacker-news.firebaseio.com/v0/${this.state.stories}.json?print=pretty`) 
    //     .then(res=>{
    //         // if(res.data.length)
    //         console.log(res.data.length)
    //          this.state.id.push(res.data)
    //         this.setState({
    //             id:this.state.id
    //         },()=>{        
    //             this.state.id[0].map((ele,index)=>{
    //             if(index<30){
    //             Axios.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json?print=pretty`)
    //             .then(res=>
    //                 {
    //                 this.state.news.push(res.data)
    //                 this.setState({
    //                     news:this.state.news
    //                 })
    //                 // console.log(res.data)
    //             })
    //         }})})
    //     })
    //     .catch(e=>console.log('error',e))
    // }

    addnews=()=>{
        // this.state.id[0].map((ele,index)=>{
        //     if(index<30){
        //     Axios.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json?print=pretty`)
        //     .then(res=>
        //         {
        //         this.state.news.push(res.data)
        //         this.setState({
        //             news:this.state.news
        //         })
        //         // console.log(res.data)
        //     })
        // }})
    }

    tophandler=()=>{
        console.log('in top')
        this.setState({
            stories:'topstories'
        })
    }
    
    newhandler=()=>{
        console.log('in new')
        this.setState({
            stories:'newstories'
        })
    }
    showhandler=()=>{
        console.log('in show')
        this.setState({
            stories:'showstories'
        })
    }
    askhandler=()=>{
        console.log('in ask')
        this.setState({
            stories:'askstories'
        })
    }
    jobhandler=()=>{
        console.log('in job')
        this.setState({
            stories:'jobstories'
        })
    }

    render(){
    return (
        <div>
            {/* <div className="header">
                <div className="header">
                <ul className='list'>
                    <div id='icon'>HN</div>
                    <li onClick={this.tophandler}>Top</li>
                    <li onClick={this.newhandler}>New</li>
                    <li onClick={this.showhandler}>Show</li>
                    <li onClick={this.askhandler}>Ask</li>
                    <li onClick={this.jobhandler}>Job</li>
                </ul>
                </div>
            </div> */}
            <div className="body">
                {
                    this.state.news.length?
                    this.state.news.map((ele,index)=><News key={index} ele={ele}/>)
                    :
                    <div> News are loading...</div>
                }            
            </div>
        </div>
        );
    }
}  

export default Top;