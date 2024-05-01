import { FormMaterial } from "../components/molecules/form-material";

import styles from './style.module.css' 

export function ExTresPage() {
    return (
        <div className={styles.container}>
            <form>                
               <FormMaterial/>
            </form>
        </div>
    )
}