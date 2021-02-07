import { InputGroup } from 'react-bootstrap'

const CloseButton = (props) => {
    return(
        <InputGroup.Prepend>
            <button  type="button" className="close" aria-label="Close">
                <span onClick={props.remove} id={props.id} aria-hidden="true">&times;</span>
            </button>
        </InputGroup.Prepend>
    )
}

export default CloseButton;
