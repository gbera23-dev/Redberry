import { useState } from "react";

export default function useCheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
  };
}