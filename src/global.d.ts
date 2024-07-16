export {};

declare global {
  interface Window {
    google?: {
      maps?: any
    };
    initMap?: () => void;
  }
}