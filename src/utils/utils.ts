export const getPaymentFrequency = (input: string) => {
  switch(input) {
    case('Per Minute'): {
      return 60
    }
    case('Per Hour'): {
      return 3600
    }
    case('Daily'): {
      return 3600 * 24
    }
    case('Weekly'): {
      return 3600 * 24 * 7
    }
    case('Monthly'): {
      return 3600 * 24 * 7 * 30
    }
    case('Per Year'): {
      return 3600 * 24 * 7 * 30 * 12
    }
    default: {
      return 60
    }
  }
}

export const formatFrequency = (input: number) => {
  switch(input) {
    case(60): {
      return 'Per Minute'
    }
    case(3600): {
      return 'Per Hour'
    }
    case(3600 * 24): {
      return 'Daily'
    }
    case(3600 * 24 * 7): {
      return 'Weekly'
    }
    case(3600 * 24 * 7 * 30): {
      return 'Monthly'
    }
    case(3600 * 24 * 7 * 30 * 12): {
      return 'Per Year'
    }
    default: {
      return "Per Minute"
    }
  }
}

export const formatFrequencyForSignAgreement = (input: number) => {
  switch(input) {
    case(60): {
      return 'minute'
    }
    case(3600): {
      return 'hour'
    }
    case(3600 * 24): {
      return 'day'
    }
    case(3600 * 24 * 7): {
      return 'week'
    }
    case(3600 * 24 * 7 * 30): {
      return  'month'
    }
    case(3600 * 24 * 7 * 30 * 12): {
      return 'year'
    }
    default: {
      return "minute"
    }
  }
}
