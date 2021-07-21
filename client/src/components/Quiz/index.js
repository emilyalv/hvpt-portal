import React, { useEffect, useState }  from "react";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar"; //progress bar package imported
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

//button styling
const StyledButton = withStyles({
	root: {
	  background: 'linear-gradient(45deg, #1E96FC 10%, #072AC8 90%)',
	  borderRadius: 3,
	  border: 0,
	  color: '#FDF4E5',
	  height: 60,
	  padding: '10px 50px',
	  margin: '20px',
	  fontFamily: 'Montserrat',
	  fontSize: 20,
	},
	label: {
	  textTransform: 'capitalize',
	},
  })(Button);

function Quiz(props) {	
    const [quizProgress, setQuizProgress] = useState(0) //progress bar
    const [quizComplete, setQuizComplete] = useState("") //quiz complete notification
	  const [questionResult, setQuestionResult] = useState("")//quiz result notification
    
  const isCorrect = (e) => {
    e.persist();
    console.log(props.question.correctChoice_id)
    console.log(e.target.dataset.id);
    // let choiceId = e.target.dataset.id;
    // console.log(choiceId, props.question.choice1_id, props.question.choice2_id);
    
    
    if (e.target.dataset.id === props.question.correctChoice_id) {
      console.log("correct")
      setQuestionResult("Correct")
    } else {
      console.log("incorrect")
      setQuestionResult("Incorrect")
    }
    props.setCurrentQuestion(props.currentQuestion + 1);
    const nextQuestion = props.currentQuestion + 1;
		const percentage = Math.round(100 / props.questions.length);//causing issues because 100/6 is not an integer lol....
		if (nextQuestion < props.questions.length) {
			props.setCurrentQuestion(nextQuestion);
			setQuizProgress(quizProgress + percentage)
		} else {
			setQuizProgress(quizProgress + percentage)

      setQuizComplete("Quiz Complete!")
      setQuestionResult("")
		}	
  }    

 
    return (
      <>
        {/* <h3>Select the Correct Answer</h3> */}
       
        {props.question &&<div className="answer-selection">         
            <StyledButton data-id={props.question.choice1_id} onClick={(e) => isCorrect(e)}>{props.question.choices[0].japanese_label} </StyledButton>
            <StyledButton data-id={props.question.choice2_id} onClick={(e) => isCorrect(e)}>{props.question.choices[1].japanese_label} </StyledButton>
        </div>}

        <div className="prog-bar">
          <ProgressBar
            completed={quizProgress}
            width="97%"
            bgColor="#FFC600"
			      margin="20px"
          />
          {/* can we attach an id here so that the styling is only visible when the state is? */}
          <h3>{quizComplete}</h3> 
          <h3>{questionResult}</h3>
        </div>
      </>
    );
    
}



export default Quiz