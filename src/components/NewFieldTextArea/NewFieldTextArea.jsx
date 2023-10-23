import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NewFieldTextArea = (props) => {
    return (
        <Box
            sx={{
            '& .MuiTextField-root': { m: 1, width: 500, maxWidth: '100%' },
            }}
        >
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
        </Box>    
    )
}

export default NewFieldTextArea