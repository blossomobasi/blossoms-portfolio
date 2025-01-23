import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://blossomobasi.vercel.app",
			lastModified: new Date(),
		},
		{
			url: "https://blossomobasi.vercel.app/about",
			lastModified: new Date(),
		},
		{
			url: "https://blossomobasi.vercel.app/projects",
			lastModified: new Date(),
		},
		{
			url: "https://blossomobasi.vercel.app/contact",
			lastModified: new Date(),
		},
	];
}
