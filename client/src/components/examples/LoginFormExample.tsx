import LoginForm from "../LoginForm";
import { ThemeProvider } from "../ThemeProvider";
import { AuthProvider } from "../AuthContext";

export default function LoginFormExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </ThemeProvider>
  );
}
