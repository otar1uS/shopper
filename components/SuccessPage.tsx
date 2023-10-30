import { resetCart } from "@/redux/shopperSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <h1 className="text-2x1 text-hoverBg font-semibold">
        Thank you for shopping in Shoppers.com
      </h1>
      <Link href="/">
        <button
          onClick={() => dispatch(resetCart())}
          className="text-lg text-lightText hover:underline underline-offset-4 decoration-[1px] hover:text-blue decoration-300 "
        >
          Continue shopping
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;
