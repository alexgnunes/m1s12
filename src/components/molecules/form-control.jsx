// import PropTypes from 'prop-types'

import { Input } from "../atoms/input";
import { Button } from "../atoms/button";

export function FormControl({ ...rest }) {
    return  (
        <>
            <Input {...rest} />
            <Button>Cadastrar</Button>
        </>
    )
}

// FormControl.propTypes = {
//     labelText: PropTypes.string.isRequired,
// }