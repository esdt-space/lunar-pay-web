export const getPaymentFrequency = (input: string) => {
  switch(input) {
    case('SS'): {
      return "Per Second"
    }
    case('MM'): {
      return "Per Minute"
    }
    case('HH'): {
      return "Hourly"
    }
    case('D'): {
      return "Daily"
    }
    case('W'): {
      return "Weekly"
    }
    case('M'): {
      return "Monthly"
    }
    case('Y'): {
      return "Per Year"
    }
  }
}
