import PropTypes from 'prop-types'
import styles from './style.module.css'


export function ButtonGoogle({ children, ...rest }) {
    return <button className={styles.button} {...rest}>{children}</button>
}

ButtonGoogle.propTypes = {
    children: PropTypes.node,
}