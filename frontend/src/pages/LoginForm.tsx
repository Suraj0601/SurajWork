import { useState } from "react";
import type { LoginData } from "../types/types";

interface LoginFormProps {
  onLogin: ({email, password}: LoginData) => void;
  onSwitch: () => void;
}

export default function LoginForm({ onLogin, onSwitch } : LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="space-y-3">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-3 py-2 border rounded-md" placeholder="Password" />
        <div className="flex items-center justify-between">
          <button onClick={() => onLogin({ email, password })} className="px-4 py-2 bg-green-600 text-white rounded-md">Login</button>
          <button onClick={onSwitch} className="text-sm text-gray-500">Create an account</button>
        </div>
      </div>
    </div>
  );
}
