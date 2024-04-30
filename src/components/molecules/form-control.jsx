

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
