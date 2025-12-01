import Navbar from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";
import { AuthProvider } from "../AuthContext";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </ThemeProvider>
  );
}
