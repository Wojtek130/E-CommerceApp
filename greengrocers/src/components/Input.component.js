import * as React from 'react';


const Input = function (props) {
    const className = props.className;
    const className2 = props.className2;
    const id = props.id;
    const type = props.type;
    const value = props.value; 
    const onChange = props.onChange;
    const text = props.text;

    return (
        <div>
            <label className={className2} htmlFor={id}>{text}</label>
            <input
                className={className}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;