const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2024-09" -> "Sep 2024", "2024" -> "2024", "present" -> "present" */
export function fmtWhen(value: string): string {
  if (value === 'present') return 'present';
  const [y, m] = value.split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

/** "Sep 2024 to present". Ranges use "to" rather than a dash. No end means no dates are shown. */
export function fmtRange(start: string, end?: string): string {
  if (!end) return '';
  const a = fmtWhen(start);
  const b = fmtWhen(end);
  return a === b ? a : `${a} to ${b}`;
}
