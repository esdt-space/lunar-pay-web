import BigNumber from "bignumber.js";

type HumanReadableConfig = { prefix?: string; suffix?: string; separator?: string }

export class W3Number {
  private readonly originalValue: BigNumber;
  private readonly approximatedValue: BigNumber;
  private readonly numberOfSignificantDecimals: number = 2;

  constructor(value: BigNumber | number | string) {
    this.originalValue = new BigNumber(value);

    if(this.originalValue.isNaN())
      throw new Error('Invalid value');

    this.approximatedValue = this.getApproximatedValue();
  }

  toBigNumber(): BigNumber {
    return this.originalValue;
  }

  toNumber(): number {
    return this.originalValue.toNumber();
  }

  toString() {
    return this.formatAsString(this.originalValue);
  }

  toHumanReadableString(config: HumanReadableConfig = {}) {
    const { prefix = '≈', suffix = '', separator = '' } = config;
    const isApproximated = !this.originalValue.isEqualTo(this.approximatedValue);

    const usedPrefix = isApproximated ? prefix : '';
    const usedSuffix = isApproximated ? suffix : '';
    const usedValue = this.formatAsString(this.approximatedValue);

    return [usedPrefix, usedValue, usedSuffix].join(separator);
  }

  private getApproximatedValue() {
    const valueWithAtLeastTwoSignificantDecimals = this.formatAsString(this.originalValue, this.numberOfSignificantDecimals);

    if (new BigNumber(valueWithAtLeastTwoSignificantDecimals).isZero()) {
      return new BigNumber(this.originalValue.toPrecision(this.numberOfSignificantDecimals));
    }

    return new BigNumber(valueWithAtLeastTwoSignificantDecimals);
  }

  private formatAsString(value: BigNumber, decimals?: number){
    return this.cleanStringValue(value.toFormat(decimals));
  }

  private cleanStringValue(value: string) {
    return value.replace(/,/g, "")
  }
}