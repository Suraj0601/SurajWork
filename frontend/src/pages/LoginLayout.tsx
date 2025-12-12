import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import type { LoginData, RegisterData } from "../types/types";
import { useState } from "react";

interface LoginLayoutProps {
    handleLogin: ({email, password}: LoginData) => void;
    handleRegister: ({name, email, password}: RegisterData) => void;
}

export default function LoginLayout({ handleLogin, handleRegister } : LoginLayoutProps) {
    const [showRegister, setShowRegister] = useState(false);
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2">
          <div className="p-8 bg-gradient-to-b from-green-400 to-green-600 text-white">
            <h1 className="text-3xl font-bold mb-2">ChatBox</h1>
            <p className="opacity-90 mb-6">A clean WhatsApp-like UI demo built with React + Tailwind.</p>
            <ul className="text-sm space-y-2 opacity-90">
              <li>• Login or Register to try the UI</li>
              <li>• Conversations list with unread badges</li>
              <li>• One-to-one chat, message composer</li>
              <li>• Search users to start a chat</li>
            </ul>
            <div className="mt-6">
              <button onClick={() => setShowRegister(false)} className="mr-3 px-4 py-2 bg-white text-green-600 rounded-md font-semibold">Login</button>
              <button onClick={() => setShowRegister(true)} className="px-4 py-2 bg-white/20 border border-white rounded-md">Register</button>
            </div>
          </div>

          <div className="p-8">
            {!showRegister ? (
              <LoginForm onLogin={handleLogin} onSwitch={() => setShowRegister(true)} />
            ) : (
              <RegisterForm onRegister={handleRegister} onSwitch={() => setShowRegister(false)} />
            )}
          </div>
        </div>
      </div>
    );
}