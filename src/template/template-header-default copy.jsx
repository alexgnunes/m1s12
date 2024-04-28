
import PropTypes from 'prop-types'
import styles from './style.module.css'

export function TemplateHeaderDefault() {
    return (
        <div>
            <header className={styles.header}>
                <img className={styles.logotipo} src="../../vite.svg" alt="Logo Vite" />
            </header>
        </div>
    )
}

TemplateHeaderDefault.propTypes = {
    children: PropTypes.node,
}
