import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

export default function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider*/}
        <OrderEntry />
      </OrderDetailsProvider>z
      {/* confirmation page does not need provider*/}
    </Container>
  );
}
