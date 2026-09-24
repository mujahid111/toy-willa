import { FormEvent, useState } from 'react';
import { X } from 'lucide-react';
import type { LoginForm, ModalType, RegisterForm } from '../types/auth';

interface AuthModalProps {
  type: Exclude<ModalType, null>;
  onClose: () => void;
  onSwitch: (type: Exclude<ModalType, null>) => void;
}

const initialLogin: LoginForm = { identifier: '', password: '' };
const initialRegister: RegisterForm = { firmName: '', customerName: '', mobile: '', email: '' };

export function AuthModal({ type, onClose, onSwitch }: AuthModalProps) {
  const [login, setLogin] = useState(initialLogin);
  const [register, setRegister] = useState(initialRegister);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const submitLogin = (event: FormEvent) => {
    event.preventDefault();
    if (!login.identifier || !login.password) return setMessage('Please enter your email/mobile number and password.');
    setMessage('Login form submitted. Connect your authentication API here.');
  };

  const submitRegister = (event: FormEvent) => {
    event.preventDefault();
    if (Object.values(register).some((value) => !value)) return setMessage('Please fill in all registration details.');
    setMessage('Registration form submitted. Connect your registration API here.');
  };

  const switchModal = (next: Exclude<ModalType, null>) => { setMessage(''); onSwitch(next); };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>
        {type === 'login' ? (
          <>
            <div className="modal-icon">🔐</div><span className="eyebrow">WELCOME BACK</span><h2 id="auth-title">Login to Toy Willa</h2>
            <p className="modal-subtitle">Use your email or mobile number to continue.</p>
            <form onSubmit={submitLogin}>
              <label>Email or Mobile Number<input value={login.identifier} onChange={(e) => setLogin({ ...login, identifier: e.target.value })} placeholder="Email or mobile number" autoComplete="username" /></label>
              <label><span>Password</span><div className="password-wrap"><input type={showPassword ? 'text' : 'password'} value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} placeholder="Enter password" autoComplete="current-password" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></div></label>
              {message && <div className="form-message">{message}</div>}<button className="primary full" type="submit">Login</button>
            </form><p className="switch-modal">Don't have an account? <button onClick={() => switchModal('register')}>Register</button></p>
          </>
        ) : (
          <>
            <div className="modal-icon">📝</div><span className="eyebrow">JOIN TOY WILLA</span><h2 id="auth-title">Create your account</h2>
            <p className="modal-subtitle">Tell us a few details so we can help you better.</p>
            <form onSubmit={submitRegister}>
              <label>Firm Name<input value={register.firmName} onChange={(e) => setRegister({ ...register, firmName: e.target.value })} placeholder="Enter firm name" /></label>
              <label>Customer Name<input value={register.customerName} onChange={(e) => setRegister({ ...register, customerName: e.target.value })} placeholder="Enter customer name" /></label>
              <label>Customer Mobile Number<input type="tel" value={register.mobile} onChange={(e) => setRegister({ ...register, mobile: e.target.value })} placeholder="Enter mobile number" inputMode="numeric" /></label>
              <label>Customer Email<input type="email" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} placeholder="Enter email address" /></label>
              {message && <div className="form-message">{message}</div>}<button className="primary full" type="submit">Register</button>
            </form><p className="switch-modal">Already have an account? <button onClick={() => switchModal('login')}>Login</button></p>
          </>
        )}
      </div>
    </div>
  );
}
