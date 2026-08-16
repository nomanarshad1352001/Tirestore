// External image URLs from Pexels - works anywhere

export const IMAGES = {
  // Hero background - luxury sports car dark
  heroBg: "https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
  
  // Season category images
  allSeason: "https://images.pexels.com/photos/32801504/pexels-photo-32801504.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  summer: "https://images.pexels.com/photos/33345481/pexels-photo-33345481.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  winter: "https://images.pexels.com/photos/6894524/pexels-photo-6894524.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  allTerrain: "https://images.pexels.com/photos/15188438/pexels-photo-15188438.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  
  // Feature icons
  shipping: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  support: "https://images.pexels.com/photos/8470251/pexels-photo-8470251.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
};

// Tire/wheel product images - beautiful car wheel close-ups
export const TIRE_IMAGES = [
  "https://images.pexels.com/photos/17156893/pexels-photo-17156893.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/38382994/pexels-photo-38382994.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/9648649/pexels-photo-9648649.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/34894518/pexels-photo-34894518.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/34327215/pexels-photo-34327215.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/8921997/pexels-photo-8921997.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/14649125/pexels-photo-14649125.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/34278191/pexels-photo-34278191.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/34237335/pexels-photo-34237335.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  "https://images.pexels.com/photos/33268786/pexels-photo-33268786.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
];

// Brand logos (using car images as brand representations)
export const BRAND_IMAGES: Record<string, string> = {
  michelin: "https://images.pexels.com/photos/17156893/pexels-photo-17156893.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  bridgestone: "https://images.pexels.com/photos/38382994/pexels-photo-38382994.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  continental: "https://images.pexels.com/photos/9648649/pexels-photo-9648649.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  goodyear: "https://images.pexels.com/photos/34894518/pexels-photo-34894518.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  pirelli: "https://images.pexels.com/photos/34327215/pexels-photo-34327215.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  yokohama: "https://images.pexels.com/photos/8921997/pexels-photo-8921997.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  cooper: "https://images.pexels.com/photos/14649125/pexels-photo-14649125.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  hankook: "https://images.pexels.com/photos/34278191/pexels-photo-34278191.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  bfgoodrich: "https://images.pexels.com/photos/15188438/pexels-photo-15188438.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
  falken: "https://images.pexels.com/photos/34237335/pexels-photo-34237335.jpeg?auto=compress&cs=tinysrgb&w=300&q=80",
};

// Get a tire image based on product ID for consistency
export function getTireImage(productId: number): string {
  return TIRE_IMAGES[productId % TIRE_IMAGES.length];
}

// Get brand image
export function getBrandImage(brandSlug: string): string {
  return BRAND_IMAGES[brandSlug.toLowerCase()] || TIRE_IMAGES[0];
}
