export const countdownMath = () => {
  const TARGET_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTargetDays = NOW_IN_MS + TARGET_DAYS_IN_MS;

  return dateTimeAfterTargetDays;
};
