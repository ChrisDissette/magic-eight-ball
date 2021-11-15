import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Form = (props) => {

    const {submitHandler, setUserName, setUserQuestion} = props

    return (
        <div>
            <Box minHeight='95vh' display='flex' alignItems='center' justifyContent='center'>
                <Paper sx={{height:500, width: {xs: 375, sm:450, md:600, lg:750}, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6, opacity:'92%'}}>
                    <form onSubmit={submitHandler}>
                        <FormControl sx={{width: {xs:350, sm: 325, md: 400, lg:500}}}>
                            <TextField label="Your Name" 
                            onChange={(event) => {setUserName(event.target.value)}} 
                            required 
                            />

                            <TextField label="What do you want to ask the Magic 8 Ball?"
                            sx={{mt:2}} 
                            onChange={(event) => {setUserQuestion(event.target.value)}} 
                            required 
                            multiline
                            rows={4}
                            />

                            <Button type='submit' color='secondary' variant='contained' sx={{mt:1}}>Submit</Button>
                        </FormControl>
                    </form>
                </Paper>
            </Box>
        </div>
    )
}

export default Form
