import SignupForm from "../SignupForm";
import { ThemeProvider } from "../ThemeProvider";
import { AuthProvider } from "../AuthContext";

export default function SignupFormExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SignupForm />
      </AuthProvider>
    </ThemeProvider>
  );
}
