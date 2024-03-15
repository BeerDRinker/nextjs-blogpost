export const baseURL = process.env.API_URL;

export function wait(duration: number = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
