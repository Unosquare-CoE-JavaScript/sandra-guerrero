import Options from "./Options";
import { Button } from 'react-bootstrap';
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();
  const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase("review")} disabled={orderDisabled}>Order Sundae!</Button>
    </div>
  );
}
