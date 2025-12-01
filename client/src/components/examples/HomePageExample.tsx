import HomePage from "../HomePage";
import { ThemeProvider } from "../ThemeProvider";
import { AuthProvider } from "../AuthContext";

export default function HomePageExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    </ThemeProvider>
  );
}
