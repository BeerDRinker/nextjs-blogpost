export const baseURL = process.env.API_URL;

export function wait(duration: number = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
