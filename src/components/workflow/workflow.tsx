import WorkflowItem from "./workflow-item";
import styles from "./workflow.module.css";

const Workflow = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Этапы работы с нами</h2>
      <ul className={styles.workflow}>
        <WorkflowItem index={1} title="Общение">
          Находим способы решить ваш вопрос по перевозке вашего груза.
        </WorkflowItem>
        <WorkflowItem index={2} title="Расчет стоимости">
          Просчитываем расстояние, вес и габариты груза
        </WorkflowItem>
        <WorkflowItem index={3} title="Договор">
          Подписываем двусторонний договор для безопасной перевозки вашего груза
        </WorkflowItem>
        <WorkflowItem index={4} title="Доставка вашего груза">
          Привозим ваш груз точно в срок
        </WorkflowItem>
      </ul>
    </section>
  );
};

export default Workflow;
