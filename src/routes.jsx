import Layout from "@/components/layout/layout";
import PaymentForm from "./pages/payment-page";
import SuccessPage from "./pages/success-page";
import NotFound from "./pages/not-found";

const routes = () => {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <PaymentForm /> },
      { path: "/success", element: <SuccessPage /> },
      { path: "*", element: <NotFound /> },
    ],
  };
};

export default routes;
