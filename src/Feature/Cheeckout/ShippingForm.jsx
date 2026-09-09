import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShippingForm({ onsubmit }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', state: '', pincode: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.phone.trim()) errs.phone = 'Required';
    if (!form.address.trim()) errs.address = 'Required';
    if (!form.city.trim()) errs.city = 'Required';
    if (!form.state.trim()) errs.state = 'Required';
    if (!form.pincode.trim()) errs.pincode = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onsubmit(form);
  };

  const inputClass = (field) => `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors[field] ? 'border-red-400' : 'border-gray-300'}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Shipping Details</h3>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input name="name" value={form.name} onChange={handleChange} className={inputClass('name')} placeholder="John Doe" />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input name="phone" value={form.phone} onChange={handleChange} className={inputClass('phone')} placeholder="+91 98765 43210" />{errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}</div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Address</label><textarea name="address" value={form.address} onChange={handleChange} rows={3} className={inputClass('address')} placeholder="Full address" />{errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}</div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">City</label><input name="city" value={form.city} onChange={handleChange} className={inputClass('city')} />{errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}</div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">State</label><input name="state" value={form.state} onChange={handleChange} className={inputClass('state')} />{errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}</div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label><input name="pincode" value={form.pincode} onChange={handleChange} className={inputClass('pincode')} />{errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}</div>
    </form>
  );
}
