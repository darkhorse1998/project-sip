import Button from 'react-bootstrap/Button';
import Excel from '../Excel/Excel';

function Submit(props) {
    return (
        <Button variant="primary" 
            onClick={
                <Excel />
            }>
            Submit
        </Button>
    );
}
 
export default Submit;