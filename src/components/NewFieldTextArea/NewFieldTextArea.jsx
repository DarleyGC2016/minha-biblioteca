import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NewFieldTextArea = (props) => {
    return (
        <Box
            sx={{
            '& .MuiTextField-root': { m: 1, width: 500, maxWidth: '100%' },
            }}
        >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <TextField 
                    name={props.name}
                    id={props.id}
                    label={props.label} 
                    placeholder={props.value ? props.value : props.placeholder}
                    value={props.value}
                    onChange={props.change}
                    inputProps={{"data-testid": "text-area"}}
                    multiline
                    required
                />
            </Typography>    
        </Box>    
    )
}

export default NewFieldTextArea