import styles from '../ContainerForDiary/ContainerForDiary.module.css';
const Container = props => {
  return <div className={styles.diaryContainer}>{props.children}</div>;
};

export default Container;
