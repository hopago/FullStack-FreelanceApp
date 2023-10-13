import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authReq } from '../../requestMethod';


const Success = () => {

  const { search } = useLocation();

  const navigate = useNavigate();

  const params = new URLSearchParams(search);

  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await authReq.put("/orders", {
          payment_intent
        });
        navigate("/orders");
      } catch (err) {
        console.log(err.response.data);
      }
    };
    makeRequest();
  }, []);

  return (
    <div className="success">
      Payment Successful. You are being redirected to the orders page. Please do not close the page.
    </div>
  )
}

export default Success
