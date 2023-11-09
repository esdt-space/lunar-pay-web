const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInMonth = secondsInDay * 30;
const secondsInYear = secondsInDay * 365;

export const getPaymentFrequency = (input: string) => {
  switch(input) {
    case 'Per Minute':
      return secondsInMinute
    case 'Per Hour':
      return secondsInHour
    case 'Daily':
      return secondsInDay
    case 'Weekly':
      return secondsInWeek
    case 'Monthly':
      return secondsInMonth
    case 'Per Year':
      return secondsInYear
  }
}

export const formatFrequency = (input: number) => {
  switch(input) {
    case secondsInMinute:
      return 'Per Minute';
    case secondsInHour:
      return 'Per Hour';
    case secondsInDay:
      return 'Daily';
    case secondsInWeek:
      return 'Weekly';
    case secondsInMonth:
      return 'Monthly';
    case secondsInYear:
      return 'Per Year';
  }
}

export const formatFrequencyForSignAgreement = (input: number) => {
  switch(input) {
    case secondsInMinute:
      return 'minute';
    case secondsInHour:
      return 'hour'
    case secondsInDay:
      return 'day';
    case secondsInWeek:
      return 'week';
    case secondsInMonth:
      return  'month';
    case secondsInYear:
      return 'year';
  }
}
