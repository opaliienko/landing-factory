import { toast } from "react-toastify";

export const trackLead = (message, landingId, background) => {
  if (window.fbq) {
    window.fbq("track", "Lead");
  } else {
    console.log(`Lead (умовний) для ${landingId} відправлено.`);
    toast.success(message, {
      style: {
        background: background,
      },
    });
  }
};
