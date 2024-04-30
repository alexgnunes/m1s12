import PropTypes from 'prop-types'
import styles from './style.module.css'


export function ButtonLinkedin({ children, ...rest }) {
    return <button className={styles.button} {...rest}>{children}</button>
}

ButtonLinkedin.propTypes = {
    children: PropTypes.node,
}