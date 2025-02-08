"use server";

import { headers } from "next/headers";

const { BOT_TOKEN: botToken, ADMIN_ID: adminId } = process.env;

export interface ContactRequest {
  name: string;
  phone: string;
  fromCity: string;
  toCity: string;
  ip: string;
}

export const newContactRequest = async (
  formData: ContactRequest,
): Promise<boolean> => {
  if (!botToken || !adminId) {
    console.error("Missing BOT_TOKEN or ADMIN_ID in environment variables");
    return false;
  }

  const message = `
📨 <b>Новая заявка!</b>

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📍 Откуда: <code>${formData.fromCity}</code>
🏁 Куда: <code>${formData.toCity}</code>
🌐 IP: <code>${formData.ip}</code>
`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: adminId,
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error("Failed to send message:", error);
    return false;
  }
};

export const submitContactRequest = async (formData: FormData) => {
  const agree = formData.get("agree");
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const fromCity = formData.get("fromCity") as string;
  const toCity = formData.get("toCity") as string;

  // Basic validation
  if (!agree) {
    throw new Error("Необходимо согласиться с политикой конфиденциальности");
  }

  if (!name || name.length < 2 || name.length > 50) {
    throw new Error("Имя должно содержать от 2 до 50 символов");
  }

  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error(
      "Пожалуйста, введите корректный номер телефона (10-15 цифр, можно начинать с +)",
    );
  }

  if (!fromCity || fromCity.length < 2 || fromCity.length > 50) {
    throw new Error("Город отправления должен содержать от 2 до 50 символов");
  }

  if (!toCity || toCity.length < 2 || toCity.length > 50) {
    throw new Error("Город назначения должен содержать от 2 до 50 символов");
  }

  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "Неизвестно";

  await newContactRequest({
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    fromCity: formData.get("fromCity") as string,
    toCity: formData.get("toCity") as string,
    ip,
  });
};
