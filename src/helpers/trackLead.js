import { toast } from "react-toastify";

export const trackLead = (message, landingId) => {
  console.log(`Подія Lead відправлена! Сайт: ${landingId}.`);
  toast.success(message);
};
