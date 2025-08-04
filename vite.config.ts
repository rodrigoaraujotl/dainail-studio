import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    Sitemap(
      { 
        hostname: 'https://www.daianelima.com.br', 
        generateRobotsTxt: true,
        robots: [
          {
            userAgent: '*',
            allow: '/',
          },
          {
            userAgent: 'Googlebot',
            allow: '/'
          },
          {
            userAgent: 'Bingbot',
            allow: '/'
          },
          {
            userAgent: 'Twitterbot',
            allow: '/'
          },
          {
            userAgent: 'facebookexternalhit',
            allow: '/'
          }
        ]
      }
    ),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
