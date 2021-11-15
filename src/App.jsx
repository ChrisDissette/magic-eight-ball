import {useState} from 'react'
import Form from './components/Form'
import Display from './components/Display'
import Load from './components/Load'
import Typography from '@mui/material/Typography';




function App() {

  const [userName, setUserName] = useState("")
  const [userQuestion, setUserQuestion] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [displayQuestion, setDisplayQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [submitInfo, setSubmitInfo] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    let randomNumber = Math.floor(Math.random() * 8)
    let eightBall = ''
    switch(randomNumber){
        case 0:
            eightBall = 'It is certain'
            break
        case 1:
            eightBall = 'It is decidely so'
            break
        case 2:
            eightBall = 'Reply hazy try again'
            break
        case 3:
            eightBall = 'Cannot predict now'
            break
        case 4:
            eightBall = 'Do not count on it'
            break
        case 5:
            eightBall = 'My sources say no'
            break
        case 6:
            eightBall = 'Outlook not so good'
            break
        case 7:
            eightBall = 'Signs point to yes'
            break
        default:
            console.log('you need to try again')
            break
        }
        setAnswer(eightBall)
        setDisplayName(userName)
        setDisplayQuestion(userQuestion)
        setLoading(true)
        const timer = setTimeout(() => {
          setLoading(false)
        }, 3000)
        setSubmitInfo(true)
}

  const handleReset = () => {
    setSubmitInfo(false)
  }

  return (
    <div className="container">
      {
        !submitInfo && loading===false ?
        <Form submitHandler={submitHandler} setUserQuestion={setUserQuestion} setUserName={setUserName} setDisplayQuestion={setDisplayQuestion} setDisplayName={setDisplayName} />
        : loading === true ?
        <Load />
        : submitInfo && loading===false ?
        <Display displayQuestion={displayQuestion} displayName={displayName} answer={answer} handleReset={handleReset} />
        : ''
      }
    </div>
  );
}

export default App;
