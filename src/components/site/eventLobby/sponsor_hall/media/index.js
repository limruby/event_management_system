import media1 from "./media-1.jpg";
import media2 from "./media-2.jpg";
import media3 from "./media-3.jpg";
import media4 from "./media-4.jpg";
import media5 from "./media-5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
