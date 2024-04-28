import { FormControl } from "../components/molecules/form-control";

import styles from './style.module.css' 

export function ExUmPage() {
    return (
        <div className={styles.container}>
            <form>                
                <FormControl placeholder="Informe seu nome" />
            </form>
        </div>
    )
}