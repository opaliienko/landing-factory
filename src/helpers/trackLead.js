import { toast } from "react-toastify";

export const trackLead = (message, landingId, background) => {
  if (window.fbq) {
    window.fbq();
    console.log(`Lead (умовний) для ${landingId} відправлено.`);
    toast.success(message, {
      style: {
        background: background,
      },
    });
  } else {
    console.warn("FB Pixel не завантажено.");
  }
};
