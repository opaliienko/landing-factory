import { toast } from "react-toastify";

export const trackLead = (message, landingId) => {
  // if (window.fbq) {
  //   window.fbq("track", "Lead");
  // }

  console.log(`Подія Lead відправлена! Сайт: ${landingId}.`);
  toast.success(message);
};
