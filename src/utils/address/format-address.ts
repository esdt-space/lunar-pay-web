export function formatAddress(longAddress: string) {
  const firstPart = longAddress.slice(0, 5);
  const lastPart = longAddress.slice(-5);

  return `${firstPart}...${lastPart}`;
}