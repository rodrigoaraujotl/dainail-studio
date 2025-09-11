import { defineConfig } from "vite";
import { VitePluginRadar } from 'vite-plugin-radar';
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
    VitePluginRadar({
      gtm: {
        id: 'GTM-TKW4B38G'
      },
      analytics: {
        id: 'AW-17548934224'
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
