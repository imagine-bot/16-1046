// pages/login.tsx
import React from 'react';
import LoginForm from '../components/ui/LoginForm';

const LoginPage: React.FC = () => {
  const handleSubmit = (username: string, phoneNumber: string, otp: string) => {
    console.log('Username:', username);
    console.log('Phone Number:', phoneNumber);
    console.log('OTP:', otp);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;