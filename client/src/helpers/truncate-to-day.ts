export function truncateToDay(input: Date): Date {
  return new Date(input.setHours(0, 0, 0, 0));
}
