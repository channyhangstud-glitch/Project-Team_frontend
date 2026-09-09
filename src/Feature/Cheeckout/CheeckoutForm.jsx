import { useState } from 'react';
import ShippingForm from './ShippingForm';

export default function CheckoutForm() {
  const [payment, setPayment] = useState('cod');
  const [shipping, setShipping] = useState(null);
  const [step, setStep] = useState(1);

  const handleShippingSubmit = (data) => {
    setShipping(data);
    setStep(2);
  };

  return (
    <div className="space-y-6">
      {step === 1 ? (
        <ShippingForm onsubmit={handleShippingSubmit} />
      ) : (
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Shipping: {shipping.name}</h3>
          <p className="text-sm text-gray-600">{shipping.address}, {shipping.city}, {shipping.state} - {shipping.pincode}</p>
          <p className="text-sm text-gray-600">Phone: {shipping.phone}</p>
          <button onClick={() => setStep(1)} className="text-sm text-indigo-600 hover:underline mt-2">Edit</button>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h3>
        <div className="space-y-3">
          {[{ id: 'cod', label: 'Cash on Delivery' }, { id: 'upi', label: 'UPI' }, { id: 'card', label: 'Credit/Debit Card' }].map((opt) => (
            <label key={opt.id} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" value={opt.id} checked={payment === opt.id} onChange={(e) => setPayment(e.target.value)} className="text-indigo-600" />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
