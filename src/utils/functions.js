import dayjs from 'dayjs';


export  const calculateDaysAgo = (date) => {
    const savedDate = dayjs(date);
    const today = dayjs();
    return today.diff(savedDate, 'day');
  };