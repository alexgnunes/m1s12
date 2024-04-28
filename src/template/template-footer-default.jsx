
import PropTypes from 'prop-types'
import styles from './style.module.css'

export function TemplateFooterDefault() {
    return (
        <div>
            <footer className={styles.TemplateFooterDefault}>
                <p>&copy; 2024 Exemplo de Empresa. Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}

TemplateFooterDefault.propTypes = {
    children: PropTypes.node,
}
