import { Button } from "../atoms/button";
import { ButtonGoogle } from "../atoms/buttonGoogle";
import { ButtonLinkedin } from "../atoms/buttonLinkedin";
import styles from './style.module.css'

export function FormLogin() {
    return (
        <>
            <div className={styles.button}>
                <Button>Cadastrar</Button>
                <ButtonGoogle>Google</ButtonGoogle>
                <ButtonLinkedin>Linkedin</ButtonLinkedin>
            </div>
        </>
    )
}
