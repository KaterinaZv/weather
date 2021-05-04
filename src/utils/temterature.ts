export const temperatureWithSign = (temperature: number) =>
  temperature > 0 ? `+${temperature}` : temperature.toString();
