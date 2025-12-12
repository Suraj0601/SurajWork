import { useState } from "react";
import type { RegisterData } from "../types/types";

interface RegisterFormProps {
  onRegister: ({}: RegisterData) => void;
  onSwitch: () => void;
}

export default function RegisterForm({ onRegister, onSwitch }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <div className="space-y-3">
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Full name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-3 py-2 border rounded-md" placeholder="Password" />
        <div className="flex items-center justify-between">
          <button onClick={() => onRegister({ name, email, password })} className="px-4 py-2 bg-green-600 text-white rounded-md">Register</button>
          <button onClick={onSwitch} className="text-sm text-gray-500">Have an account? Login</button>
        </div>
      </div>
    </div>
  );
}
