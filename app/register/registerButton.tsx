import { useStore } from "@/app/store";
import isValidEmail from "@/utils/emailRegex";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterButton({
  checkPassword,
}: {
  checkPassword: string;
}) {
  const { setPasswordVisibility, checkbox, registerUser } = useStore();
  const { push } = useRouter();

  const { email, firstName, lastName, password } = registerUser;

  const postRegistration = async () => {
    try {
      await axios
        .post("/api/register", registerUser)
        .then((e) => e.data.userState && push("https://basic-auth-nine.vercel.app/login"));
    } catch (error) {
      console.error(`postRegistration failed ==> ${error}`);
    }
  };

  return (
    <button
      className={`mt-5 h-10 w-full rounded bg-theme1 py-2 text-3xl text-light transition-colors duration-300 hover:bg-theme1/75 sm:h-20 md:h-28 lg:h-auto`}
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
      <p
        className={`relative flex items-center justify-center md:text-5xl lg:text-base`}
      >
        Register
      </p>
    </button>
  );
}
