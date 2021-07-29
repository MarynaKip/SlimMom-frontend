import styles from './styles.module.css';

const ContainerForView = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      { children }
    </div>
  );
};

export default ContainerForView;
