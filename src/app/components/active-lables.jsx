import styles from './active-label.module.css';

// export interface ActiveLabelProps {
//     children
// }

const ActiveLabelProps = ({ children }) => {
  return <span className={styles.label}>{children}</span>;
};

export default ActiveLabelProps;
