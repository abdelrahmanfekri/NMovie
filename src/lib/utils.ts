const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500`;

export function getFullImagePath(path: string): string {
  return `${IMAGE_BASE_URL}${path}`;
}
