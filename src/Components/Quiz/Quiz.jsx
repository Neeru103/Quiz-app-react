import React, { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css'

function Quiz() {
    const [index,setIndex]=useState(0);
    const [question,setQuestion]=useState(data[index]);
    const [Anscolor,setAnsColor]=useState(new Array(4).fill('m-1 p-2'));
    const [selectedAns,setSelectedAns]=useState(false);
    const [flag,setflag]=useState(false);
    const [result,setresult]=useState(0);

    function handleReset()
    {
        setflag(!flag);
        setIndex(0);
        setQuestion(data[0]);
        setresult(0);
        setAnsColor(new Array(4).fill('m-1 p-2'));

    }
    function handlebtnClick()
    {
        if(selectedAns===false)
        {
            alert('Please choose the answer');
            return;
        }
        if(index===4)
        {
            setflag(!flag);
            return;
        }
        setIndex(index+1);
        setQuestion(data[index+1]);
       setAnsColor( new Array(4).fill('m-1 p-2'));
       setSelectedAns(false);
    }


    function handleClick(e)
    {
        if(selectedAns===true)
            return;

        setSelectedAns(true);

      if(e.target.value===question.answer)
        {
        
            setAnsColor((prevArray)=>{
                const updatedArray=[...prevArray];
                updatedArray[e.target.value-1]='m-1 p-2 bg-success';
                return updatedArray;
            })

            setresult(result+1);
            console.log(result);
        } 
        else{
            setAnsColor((prevArray)=>{
                const updatedArray=[...prevArray];
                updatedArray[e.target.value-1]='m-1 p-2 bg-danger';
                updatedArray[question.answer-1]='m-1 p-2 bg-success';
                return updatedArray;
            })
        } 
    }
  return (
   <>
    <div className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}} >
                   
  <div hidden={flag} className=' m-2 p-4' style={{backgroundColor:'white',border:'2px solid white',width:'500px',height:'420px',borderRadius:'10px'}} >
    
  <h4>CS Fundamentals Quiz</h4>
  <hr></hr>
                    <div>
                        <div style={{fontFamily:'sans-serif' ,fontSize:'20px'}}>{index+1}. {question.Question}</div>
                      <ul style={{listStyle:'none',fontSize:'15px',fontFamily:'serif'}}>
                        <li className={Anscolor[0]} style={{borderRadius:'2px',border:'1px solid black'}}  value='1' onClick={handleClick}>{question.Option1}</li>
                        <li className={Anscolor[1]} style={{borderRadius:'2px',border:'1px solid black'}} value='2' onClick={handleClick}>{question.Option2}</li>
                        <li className={Anscolor[2]} style={{borderRadius:'2px',border:'1px solid black'}} value='3' onClick={handleClick}>{question.Option3}</li>
                        <li className={Anscolor[3]} style={{borderRadius:'2px',border:'1px solid black'}} value='4' onClick={handleClick}>{question.Option4}</li>
                      </ul>
                       <div className='text-center m-1' style={{fontFamily:'sans-serif' ,fontSize:'15px'}}>{index+1} of 5 questions </div>
                      <div className='text-center'><button className='btn text-white w-50 ' onClick={handlebtnClick} style={{background:'#61499b'}}>Next</button></div>
                    </div>
               
  </div>
    
    <div  hidden={!flag} className=' m-2 p-4' style={{backgroundColor:'white',border:'2px solid white',width:'300px',height:'200px',borderRadius:'10px'}}>
    <h4>CS Fundamentals Quiz</h4>
    <hr></hr>
        <p style={{fontFamily:'sans-serif' ,fontSize:'20px'}}>You Scored {result} out of 5!</p>
      <div className='text-center'>
      <button className='btn btn-primary w-50' onClick={handleReset}>Reset</button>
      </div>
    </div>

                </div>
   </>
  )
}

export default Quiz