import "./CheckoutFields.css";
import useCheckoutForm from "../hooks/useCheckoutForm";

export default function CheckoutFields({ onFormDataChange }) {
  const { formData, handleChange } = useCheckoutForm();

  const handleInputChange = (e) => {
    handleChange(e);
    if (onFormDataChange) {
      onFormDataChange({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="checkout-fields">
      <div className="checkout-fields__group">
        <label className="checkout-fields__label" htmlFor="fullName">
          Full Name
        </label>
        <div className="checkout-fields__input-wrapper">
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="checkout-fields__input"
            placeholder="e.g. Text"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          {formData.fullName && <span className="checkout-fields__check">✓</span>}
        </div>
      </div>

      <div className="checkout-fields__row">
        <div className="checkout-fields__group">
          <label className="checkout-fields__label" htmlFor="email">
            Email
          </label>
          <div className="checkout-fields__input-wrapper">
            <input
              id="email"
              type="email"
              name="email"
              className="checkout-fields__input"
              placeholder="e.g. Text"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formData.email && <span className="checkout-fields__check">✓</span>}
          </div>
        </div>

        <div className="checkout-fields__group">
          <label className="checkout-fields__label" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <div className="checkout-fields__input-wrapper">
            <input
              id="mobileNumber"
              type="tel"
              name="mobileNumber"
              className="checkout-fields__input"
              placeholder="e.g. Text"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
            {formData.mobileNumber && <span className="checkout-fields__check">✓</span>}
          </div>
        </div>
      </div>

      <div className="checkout-fields__group">
        <label className="checkout-fields__label" htmlFor="cardNumber">
          Card Number
        </label>
        <div className="checkout-fields__input-wrapper">
          <input
            id="cardNumber"
            type="text"
            name="cardNumber"
            className="checkout-fields__input"
            placeholder="e.g. 1234 4567 8901 2345"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
          {formData.cardNumber && <span className="checkout-fields__check">✓</span>}
        </div>
      </div>

      <div className="checkout-fields__row">
        <div className="checkout-fields__group">
          <label className="checkout-fields__label" htmlFor="expiry">
            Expiry
          </label>
          <div className="checkout-fields__input-wrapper">
            <input
              id="expiry"
              type="text"
              name="expiry"
              className="checkout-fields__input"
              placeholder="e.g. 12/34"
              value={formData.expiry}
              onChange={handleInputChange}
            />
            {formData.expiry && <span className="checkout-fields__check">✓</span>}
          </div>
        </div>

        <div className="checkout-fields__group">
          <label className="checkout-fields__label" htmlFor="cvv">
            CVV
          </label>
          <div className="checkout-fields__input-wrapper">
            <input
              id="cvv"
              type="password"
              name="cvv"
              className="checkout-fields__input"
              placeholder="e.g. 123"
              value={formData.cvv}
              onChange={handleInputChange}
            />
            {formData.cvv && <span className="checkout-fields__check">✓</span>}
          </div>
        </div>
      </div>
    </div>
  );
}