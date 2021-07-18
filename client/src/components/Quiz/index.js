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
	  color: 'white',
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
    const [quizProgress, setQuizProgress] = useState(0) //starting @ 0
    const [quizComplete, setQuizComplete] = useState("")
  function isCorrect(e) {
    console.log(e.target.dataset.id)
    if (e.target.dataset.id === props.question.correct_choice_id) {
      console.log("correct")
    } else {
      console.log("incorrect")
    }
    props.setCurrentQuestion(props.currentQuestion + 2);
    const nextQuestion = props.currentQuestion + 2;
		const percentage = 100 / props.questions.length;
		if (nextQuestion < props.questions.length) {
			props.setCurrentQuestion(nextQuestion);
			setQuizProgress(quizProgress + percentage)
		} else {
			setQuizProgress(quizProgress + percentage)
			//alert("you have reached the end of the quiz!") 
			setQuizComplete("Quiz Complete!") // replaced the alert with this!
		}	
  }    

 
    return (
      <>
        <h3>Select the Correct Answer</h3>
       
        {props.question &&<div className="answer-selection">         
            <StyledButton data-id={props.question.choice1_id} onClick={isCorrect}>{props.question.choices[0].japanese_label} </StyledButton>
            <StyledButton data-id={props.question.choice2_id} onClick={isCorrect}>{props.question.choices[1].japanese_label} </StyledButton>
        </div>}

        <div className="prog-bar">
          <ProgressBar
            completed={quizProgress}
            width="97%"
            bgColor="#FFC600"
			margin="20px"
          />
          <h3>{quizComplete}</h3>
        </div>
      </>
    );
    
}



export default Quiz