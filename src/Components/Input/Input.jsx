import "./InputActivity.css";

const FormInput = (props) => {
    return (
        <div>
            <input placeholder={props.placeholder} />
        </div>
    );
};

export default FormInput;