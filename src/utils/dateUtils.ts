import dayjs from "dayjs";

export const getDayOfWeek = (dateString:string) => {
    const day = dayjs(dateString).format('ddd').toUpperCase();
    return day;
};

export const getDayOfMonth = (dateString:string) => {
    const day = dayjs(dateString).date();
    return day;
};

export const isToday = (dateString:string) => {
    const today = new Date();
    const day = today.getDate(); 
    return day === getDayOfMonth(dateString);
};  