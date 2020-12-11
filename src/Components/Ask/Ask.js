import React from 'react';
import News from '../News/News';
// import './Body.css' ;
import Axios from 'axios';

class Body extends React.Component{
    constructor(){
        super()
        this.state={
            id:[],
            news:[],
            stories:'askstories'
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
                this.state.id[0].forEach((ele,index)=>{
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
    render(){
    return (
        <div>
            
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

export default Body;
