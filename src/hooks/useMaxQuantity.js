export const MAX_QTY = 20;

export default function useMaxQuantity(qty) {
  const isMax = qty >= MAX_QTY;
  const message = isMax
    ? `Maximum ${MAX_QTY} allowed per order. Please place another order if required.`
    : "";
  return { isMax, message };
}