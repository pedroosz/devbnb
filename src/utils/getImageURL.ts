export default function getImageUrl(name: string) {
  return new URL(`../assets/${name}.jpeg`, import.meta.url).href;
}
