import styles from './not-active-label.module.css';

// export interface ActiveLabelProps {
//     children
// }

const NotActiveLabelProps = ({ children }) => {
  return <span className={styles.label}>{children}</span>;
};

export default NotActiveLabelProps;
