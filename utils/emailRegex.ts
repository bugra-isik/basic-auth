const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default function isValidEmail(email: string) {
  return emailRegex.test(email);
}
