import TeamMember from "@/components/team-member/team-member";
import styles from "./team.module.css";

export default function Team() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Контакты наших сотрудников</h1>
      <div className={styles.items}>
        <TeamMember
          role="Генеральный директор"
          phone="74951063315"
          email="info@tlknika.ru"
        >
          Новиков Андрей Олегович
        </TeamMember>
      </div>
    </div>
  );
}
