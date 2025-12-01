import { createContext, useContext, useState } from "react";

interface User {
  id: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  const login = async (username: string, password: string): Promise<boolean> => {
    console.log("Login attempt:", { username, password });
    
    if (username && password.length >= 4) {
      const newUser = { id: crypto.randomUUID(), username };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const signup = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    console.log("Signup attempt:", { username, password });
    
    if (username.length < 3) {
      return { success: false, error: "Username must be at least 3 characters" };
    }
    if (password.length < 4) {
      return { success: false, error: "Password must be at least 4 characters" };
    }
    
    const newUser = { id: crypto.randomUUID(), username };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
