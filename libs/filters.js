import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';

export const filterWeek = dates => {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const TODAY = '今天', TOMORROW = '明天', AFTERTOMORROW = '后天';
  const date = moment(dates)
  const curTime = +moment().format('Y-MM-DD')
  const datesTime = +moment(dates)

  if (curTime === datesTime) {
    return TODAY
  } else if (datesTime <= curTime + 86400000) {
    return TOMORROW
  } else if (datesTime <= curTime + 86400000 + 86400000) {
    return AFTERTOMORROW
  } else {
    return week[date.day()]
  }
}

export const filterMMDD = date => {
  return moment(date).format('MM-DD')
}

export const filterHHMM = date => {
  return moment(date).format('HH:mm')
}