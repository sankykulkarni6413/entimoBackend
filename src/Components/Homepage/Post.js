/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React,{useState} from 'react';
import styled from 'styled-components';
import {NavLink,useHistory} from "react-router-dom";
function Post(props) {
  const history=useHistory();
  const [upvotes,setUpvotes]= useState('');
  const [downvotes,setDownvotes]=useState('');
const [comments,setComments]=useState('');
  const [owner,setOwner]= useState('');
  const [question,setQuestion]=useState('');

  const postquestion=async (e) =>{
      e.preventDefault();

      const res=await fetch('/Homepage',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            owner,
              question,
              upvotes,
              downvotes,
              comments
          })
      });

     const data=res.json();
      
     if(res.status==400 || !data)
     {
         window.alert("Invalid Credentials");
     }
     else{
         window.alert("Question Uploded Successfully");
         history.push('/Homepage');
     }
    }
  // eslint-disable-next-line react/prop-types
  return (props.trigger) ? (

    <Contain>
      <div>
      <h5 value={question} onChange={(e)=>setOwner(e.target.value)} >Sanket Kulkrani</h5>
        <button onClick={() => props.setTrigger(false)}>
          close
        </button>
        <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Enter Question"/>
        
        <button onClick={postquestion} >
          post
        </button>
        {props.children}
      </div>
    </Contain>
  ) : '';
}

export default Post;
const Contain = styled.div`
width: 400px;
height: 500px;
position: absolute;
background-color:red;
top: 100%;
left: 40%;
`;
