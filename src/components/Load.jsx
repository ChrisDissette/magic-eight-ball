import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Load = (props) => {
    return (
        <div>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' minHeight='95vh'>
                <Paper sx={{height:200, width: {xs: 300, sm:450, md:600, lg:750}, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6, opacity:'92%', p:5}}>
                    <Typography variant='h2'>Hmm... let me think about that</Typography>
                </Paper>
                <br />
                <CircularProgress size={150} thickness={10} color='secondary'/>
            </Box>
        </div>
    )
}

export default Load
