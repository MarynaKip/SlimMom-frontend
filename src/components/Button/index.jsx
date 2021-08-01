import styles from './styles.module.css';

const Button = ({title, cb, type, form}) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={cb}
      form={form}
    >
      {title}
    </button>
  );
};

export default Button;
