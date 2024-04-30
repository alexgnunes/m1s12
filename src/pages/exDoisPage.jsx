import { FormLogin } from "../components/molecules/form-login";

import styles from './style.module.css' 

export function ExDoisPage() {
    return (
        <div className={styles.container}>
            <form>                
               <FormLogin/>
            </form>
        </div>
    )
}