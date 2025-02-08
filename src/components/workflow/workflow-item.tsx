import styles from "./workflow-item.module.css";

interface WorkflowItemProps extends React.PropsWithChildren {
  index?: number;
  title: string;
}

const WorkflowItem: React.FC<WorkflowItemProps> = ({
  title,
  children,
  index = 1,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.number}>{index}</div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{children}</p>
    </li>
  );
};

export default WorkflowItem;
