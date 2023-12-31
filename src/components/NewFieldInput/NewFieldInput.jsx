import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const NewFieldInput = (props) => {
    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: 500, maxWidth: '100%' },
            }}
        >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <TextField
                    id={props.id}
                    label={props.label}
                    value={props.value}
                    onChange={props.change}
                    variant="standard"
                    name={props.name}
                    inputProps={{"data-testid": "input"}}
                    fullWidth
                    required
                    error={props.erro}
                    helperText={props.ajuda}
                />
            </Typography>
        </Box>
    )
}

export default NewFieldInput