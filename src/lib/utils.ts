export const parseMs = (milliseconds: number) => {
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    centiseconds: roundTowardsZero(milliseconds / 10) % 100,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
    microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000,
  };
};

export const padTwo = (n: number) => {
  return `${n}`.length < 2 ? `0${n}` : `${n}`;
};
