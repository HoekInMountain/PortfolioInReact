import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const validateEmail = (email) =>
    /^\S+@\S+\.\S+$/.test(email);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setError(`${name} is required`);
    } else if (name === 'email' && !validateEmail(value)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input
          name="name"
          placeholder="Name"
          onBlur={handleBlur}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          name="email"
          placeholder="Email"
          onBlur={handleBlur}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          name="message"
          placeholder="Message"
          onBlur={handleBlur}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
}
