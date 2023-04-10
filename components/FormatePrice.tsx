type Props = {
  amount: number;
};

const FormatePrice = ({ amount }: Props) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormatePrice;
