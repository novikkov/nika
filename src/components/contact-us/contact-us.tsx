import Button from "@ui/button";
import Input from "@ui/input";
import Checkbox from "@ui/checkbox";
import styles from "./contact-us.module.css";
import { submitContactRequest } from "@/lib/actions";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Остались вопросы?</h3>
      <p className={styles.description}>
        Оставьте заявку и мы с вами свяжемся!
      </p>
      <form className={styles.form} action={submitContactRequest}>
        <Input
          name="name"
          placeholder="Ваше имя"
          required
          minLength={2}
          maxLength={50}
        />
        <Input
          name="phone"
          placeholder="Ваш телефон"
          required
          pattern="^\+?[0-9]{10,15}$"
          title="Пожалуйста, введите корректный номер телефона (10-15 цифр, можно начинать с +)"
        />
        <h3>Маршрут</h3>
        <Input
          name="fromCity"
          placeholder="Откуда"
          required
          minLength={2}
          maxLength={50}
        />
        <Input
          name="toCity"
          placeholder="Куда"
          required
          minLength={2}
          maxLength={50}
        />
        <Checkbox name="agree" required>
          Я согласен с политикой конфиденциальности
        </Checkbox>
        <Button type="submit">Оставить заявку</Button>
      </form>
    </div>
  );
};

export default ContactUs;
