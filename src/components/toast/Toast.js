import { toast } from 'react-toastify';

toast.configure();

// Normal Toast Notification: Takes in a message for toast. Lasts 8 Seconds.
const Toast = (message) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 8000
  });
};

// Error Toast Notification: Takes in a message for toast. Lasts 8 Seconds.
const ErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 8000
  });
};

// Warn Toast Notification: Takes in a message for toast. Lasts 8 Seconds.
const WarnToast = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 8000
  });
};

// Success Toast Notification: Takes in a message for toast. Lasts 8 Seconds.
const SuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 8000
  });
};

export {
  Toast,
  ErrorToast,
  WarnToast,
  SuccessToast
};
