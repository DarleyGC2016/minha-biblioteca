
const NewFieldInput = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>
                {props.label}                
            </label>
            <input 
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.value ? props.value : props.placeholder}
                value={props.value}
                onChange={props.change}
                maxLength={props.maxLength}
            />
        </div>
    )
}

export default NewFieldInput