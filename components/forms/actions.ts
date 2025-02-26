export const handleUsernameChange = (value: string) => {
  const errors: string[] = [];
  if (value.length < 3)
    errors.push("Username must be at least 3 characters long.");
  if (value === "admin" || value === "user" || value === "Super Admin")
    errors.push("Invalid username");
  if (value.length > 25)
    errors.push("Username must be at most 25 characters long.");

  return errors.length === 0 ? undefined : errors.join(", ");
};

export const handleEmailChange = (value: string) => {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailPattern.test(value) ? undefined : "Enter a valid email address.";
};

export const handlePasswordChange = (value: string) => {
  return value.length < 6
    ? "Password must be at least 6 characters long."
    : undefined;
};

export const handleConfirmPasswordChange = (
  confirmPassword: string,
  password: string,
) => {
  return confirmPassword !== password ? "Passwords do not match." : undefined;
};