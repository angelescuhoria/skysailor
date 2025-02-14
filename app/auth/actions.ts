export const handleEmailChange = (value: string) => {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]{3,}\.[a-z]{2,}$/;
  return emailPattern.test(value) ? undefined : "Enter a valid email address.";
};