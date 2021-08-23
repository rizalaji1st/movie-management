const Input  = (props) => {
    return(
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <input 
                className="form-control" 
                type={props.type} 
                id={props.name} 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                />
        </div>
    );
}

export default Input;