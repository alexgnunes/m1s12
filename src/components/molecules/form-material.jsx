import ButtonMaterial from "../atoms/buttonMaterial"
import InputMaterial from "../atoms/inputMaterial"
import SelectLabels from "../atoms/select"
import FormControl from '@mui/material/FormControl';

export function FormMaterial() {
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputMaterial />
                <SelectLabels />
                <ButtonMaterial />
            </FormControl>
        </>
    )
}
