import { useMemo } from "react";

const useDateUtils = () => {
  const utils = useMemo(
    () => ({
      formatDate: (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const d = new Date(date);
        console.log("D__ ", d);
        return d.toLocaleDateString("es-ES", options);
      },

      formatDateForGrouping: (date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`;
      },

      compareDates: (dateA, dateB) => {
        return new Date(dateB) - new Date(dateA);
      },

      isToday: (date) => {
        const today = new Date();
        const compareDate = new Date(date);
        return (
          today.getDate() === compareDate.getDate() &&
          today.getMonth() === compareDate.getMonth() &&
          today.getFullYear() === compareDate.getFullYear()
        );
      },

      toLocalISOString: (date) => {
        const d = new Date(date);
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); // Ajustar la fecha a la zona horaria local
        return d.toISOString().split("T")[0];
      },
    }),
    []
  );

  return utils;
};

export default useDateUtils;
