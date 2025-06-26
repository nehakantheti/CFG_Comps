/**
 * Configuration for API endpoints
 * In production, API_BASE_URL should be set via environment variables
 * Create a .env file with:
 * VITE_API_BASE_URL=your_api_url
 */

// For development, fallback to localhost if env variable is not set
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Define all API endpoints relative to the base URL
export const ENDPOINTS = {
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGIN: `${API_BASE_URL}/auth/login`,
}; 