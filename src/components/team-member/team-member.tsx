import Link from "next/link";
import { formatPhone } from "@/lib/formatters";
import styles from "./team-member.module.css";

interface TeamMemberProps extends React.PropsWithChildren {
  phone: string;
  email: string;
  role?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  children,
  phone,
  email,
  role = "Сотрудник",
}) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>{children}</h4>
      <span className={styles.role}>{role}</span>
      <hr className={styles.divider} />
      <div className={styles.links}>
        <Link href={`tel:${phone}`} target="_blank">
          Телефон: {formatPhone(phone)}
        </Link>
        <Link href={`mailto:${email}`} target="_blank">
          Email: {email}
        </Link>
        <Link href={`https://wa.me/${phone}`} target="_blank">
          WhatsApp
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
