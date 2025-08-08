import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://prasen.dev';

export const revalidate = 86400; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getFileModDate = (filePath: string) => {
    try {
      const stats = fs.statSync(path.join(process.cwd(), filePath));
      return new Date(stats.mtime);
    } catch (e) {
      return new Date();
    }
  };

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getFileModDate('src/app/page.tsx'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: getFileModDate('src/app/projects/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return routes;
}
