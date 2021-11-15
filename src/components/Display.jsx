import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Display = (props) => {

    const { displayName, displayQuestion, answer, handleReset} = props

    return (
        <div>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <Paper sx={{height:500, width: {xs: 300, sm:450, md:600, lg:750}, display:'flex', alignItems:'center', textAlign:'left', justifyContent:'center', flexDirection:'column', borderRadius:6, opacity:'92%', px:5}}>
                    <Typography variant='h3'>Hey {displayName}, the Magic 8 Ball has spoken!</Typography>
                    <br />
                    <Typography variant='h5' textAlign='left'><span>Your Question:</span> {displayQuestion}</Typography>
                    <br />
                    <Typography variant='h5'><span>The Answer:</span> {answer}</Typography>
                    <Button variant='contained' color='error' onClick={handleReset} sx={{mt:5}} >Reset</Button>
                </Paper>
            </Box>
        </div>
    )
}

export default Display
