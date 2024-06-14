import React, {useEffect, useRef, useState} from "react";
const payment_btn_id = process.env.PAYMENT_BTN_ID || 'pl_OMdi2eP0jUZBEY';

export default function Donation() {
  const formRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {

    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/payment-button.js"]');
    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    if (formRef.current && !isScriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', payment_btn_id);
      script.async = true;
      
      script.onload = () => setIsScriptLoaded(true);
      script.onerror = () => console.error('Failed to load the script');

      formRef.current.appendChild(script);
    }

    return () => {
      if (formRef.current && isScriptLoaded) {
        const script = formRef.current.querySelector('script[src="https://checkout.razorpay.com/v1/payment-button.js"]');
        if (script) {
          formRef.current.removeChild(script);
        }
      }
    };
  }, [isScriptLoaded]);


  return (
    <div className="pt-40">
      <form ref={formRef}>
      </form>
    </div>
  );

}





const RazorpayButton = () => {
  return (
    <form
      dangerouslySetInnerHTML={{
        __html: `
          <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OMdi2eP0jUZBEY" async></script>
        `,
      }}
    />
  );
};
