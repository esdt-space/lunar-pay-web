import { TokenValueError } from "@/features/tokens/enums";

export function tokenErrorToText(errorType: TokenValueError) {
  switch (errorType) {
    case TokenValueError.ZeroValue:
    case TokenValueError.InvalidFormat:
      return 'Invalid amount';
    case TokenValueError.BalanceExceeded:
      return 'Amount exceeds the token balance';
  }
}