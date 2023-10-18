import { useStore } from "@/app/store";
import isValidEmail from "@/utils/emailRegex";
import axios from "axios";

export default function Register({ checkPassword }: { checkPassword: string }) {
  const { setPasswordVisibility, checkbox, registerUser } = useStore();

  const { email, firstName, lastName, password } = registerUser;

  const postRegistration = async () => {
    try {
      await axios.post("/api/register", registerUser);
      console.log("postRegistration complete", registerUser);
    } catch (error) {
      console.log(`postRegistration failed ==> ${error}`);
    }
  };

  return (
    <button
      className={`mt-5 w-full rounded bg-theme1 py-2 text-3xl text-light transition-colors duration-300 hover:bg-theme1/75`}
      onClick={() => {
        switch (true) {
          case checkbox &&
            checkPassword === registerUser.password &&
            isValidEmail(email):
            setPasswordVisibility(false);
            postRegistration();
            break;
          case !(email && firstName && lastName && password):
            alert("Please fill in all required fields.");
            break;
          case !isValidEmail(email):
            alert("Invalid email adress.");
            break;
          case !checkbox:
            alert(
              "To register, please agree to our Terms of Use and Privacy Statement.",
            );
            break;
          case checkPassword !== registerUser.password:
            alert("The passwords do not match. Please try again.");
            break;
        }
      }}
    >
      <p>Register</p>
    </button>
  );
}
