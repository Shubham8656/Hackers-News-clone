import React from 'react';
import './News.css' ;
// import ModeCommentIcon from '@material-ui/icons/ModeComment';

const News=(props)=>{
    // console.log(props)
    const{title,score,by,time,descendants,url}=props.ele;
    return (
        <div className="news">
            <div className='title-cont'>
                <h3 id='title'><a href={url}>{title}</a></h3>
                {/* <h4 id='website'>(website)</h4> */}
            </div>
            <div className='info-cont'>
                <div className='info'>
                    <h3 id='score'>+{score}</h3>
                    <div>|</div>
                    <h4 id='by'>by {by}</h4>
                    <div>|</div>
                    <h4 id='time'>{time}</h4>
                </div>
                <h4 id='comment'>{descendants}  <div className='fas fa-comment-alt' style={{fontSize:"15px",color:'grey'}}></div></h4>
            </div>
        </div>
        );
}  

export default News;