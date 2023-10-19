import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const NewFieldInput = (props) => {
    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: 500, maxWidth: '100%' },
            }}
        >
            <TextField
                id={props.id}
                label={props.label}
                value={props.value}
                onChange={props.change}
                variant="standard"
                name={props.name}
                fullWidth
                required
                error={props.erro}
                helperText={props.ajuda}
            />
        </Box>
    )
}

export default NewFieldInput