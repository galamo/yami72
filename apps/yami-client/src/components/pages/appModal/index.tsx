
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';


export default function AppModal() {

    const appModalState = useSelector((state: any) => state?.modalReducer)
    const dispatch = useDispatch();
    const closeFn = () => { dispatch({ type: ACTIONS.MODAL.TOGGLE_MODAL, payload: { isOpen: false } }) }
    const { isOpen, header, message } = appModalState
    return (<Modal show={isOpen} onHide={closeFn}>
        <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeFn}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>)
}

