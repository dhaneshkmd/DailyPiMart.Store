import { Product } from '@/types';
import iphoneImage from '@/assets/iphone-15-pro.jpg';
import coffeeImage from '@/assets/coffee-beans.jpg';
import courseImage from '@/assets/web-course.jpg';
import headphonesImage from '@/assets/headphones.jpg';
import tshirtImage from '@/assets/cotton-tshirt.jpg';
import smartHubImage from '@/assets/smart-hub.jpg';
import yogaMatImage from '@/assets/yoga-mat.jpg';
import chocolateImage from '@/assets/chocolate-box.jpg';

export const sampleProducts: Product[] = [
  {
    id: '1',
    slug: 'iphone-15-pro',
    title: 'iPhone 15 Pro - 256GB',
    description: 'The latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
    pricePi: 899.99,
    images: [iphoneImage],
    category: 'Electronics',
    stock: 5,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    slug: 'organic-coffee-beans',
    title: 'Premium Organic Coffee Beans - 1kg',
    description: 'Single-origin Ethiopian coffee beans, ethically sourced and freshly roasted.',
    pricePi: 24.99,
    images: [coffeeImage],
    category: 'Groceries',
    stock: 50,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    slug: 'web-development-course',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, and Node.js from beginner to advanced.',
    pricePi: 149.99,
    images: [courseImage],
    category: 'Services',
    stock: 100,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    slug: 'wireless-headphones',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling with premium sound quality.',
    pricePi: 349.99,
    images: [headphonesImage],
    category: 'Electronics',
    stock: 12,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    slug: 'designer-t-shirt',
    title: 'Premium Cotton T-Shirt',
    description: 'Comfortable and stylish t-shirt made from 100% organic cotton.',
    pricePi: 29.99,
    images: [tshirtImage],
    category: 'Fashion',
    stock: 25,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    slug: 'smart-home-hub',
    title: 'Smart Home Hub with Voice Control',
    description: 'Control your entire smart home with voice commands and smartphone app.',
    pricePi: 129.99,
    images: [smartHubImage],
    category: 'Electronics',
    stock: 8,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    slug: 'yoga-mat-premium',
    title: 'Premium Eco-Friendly Yoga Mat',
    description: 'Non-slip yoga mat made from sustainable materials with alignment guides.',
    pricePi: 79.99,
    images: [yogaMatImage],
    category: 'Sports & Outdoors',
    stock: 30,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '8',
    slug: 'gourmet-chocolate-box',
    title: 'Artisan Chocolate Collection',
    description: 'Handcrafted chocolates with exotic flavors from around the world.',
    pricePi: 45.99,
    images: [chocolateImage],
    category: 'Groceries',
    stock: 20,
    active: true,
    createdAt: new Date().toISOString(),
  },
];

export const categories = [
  'All',
  'Electronics',
  'Groceries', 
  'Services',
  'Fashion',
  'Home & Garden',
  'Books & Media',
  'Sports & Outdoors',
  'Automotive',
];

export function getProductBySlug(slug: string): Product | undefined {
  return sampleProducts.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return sampleProducts;
  return sampleProducts.filter(product => product.category === category);
}