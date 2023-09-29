import React from 'react'

const NewFieldTextArea = (props) => {
    return (
            <div>
                <label htmlFor={props.name}>
                    {props.label}                
                </label>
                <textarea 
                    name={props.name}
                    id={props.id}
                    placeholder={props.value ? props.value : props.placeholder}
                    value={props.value}
                    onChange={props.change}>                    
                </textarea>
            </div>
    )
}

export default NewFieldTextArea