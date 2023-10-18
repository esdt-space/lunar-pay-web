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
      return 120
    }
  }
}
