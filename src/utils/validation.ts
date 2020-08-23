export function isRequired(input: string | undefined) {
  return input?.trim() ? true : "This value is required";
}
