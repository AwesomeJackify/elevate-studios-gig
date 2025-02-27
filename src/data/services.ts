import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME,
  },
});

const introVideo = cld.video("hero");
const introVideoURL = introVideo.toURL();

const services = [
  {
    name: "Podcast\nProduction",
    description: "From concept development to final editing, we help bring your voice to life. Whether you’re a seasoned podcaster or just starting out, we provide the tools and expertise you need to create engaging audio and video content.",
    icon: "mdi:podcast",
    url: "/services/podcast-production",
    videoUrl: cld.video("services/podcast").toURL()
  },
  {
    name: "Video\nProduction",
    description: "Our team specializes in crafting visually compelling stories that resonate with audiences. We work with you to create videos that capture your vision, whether for promotional content, educational purposes, or community engagement.",
    icon: "mdi:video",
    url: "/services/video-production",
    videoUrl: cld.video("services/video").toURL()
  },
  {
    name: "Content\nCreation",
    description: "Our team specializes in crafting visually compelling stories that resonate with audiences. We work with you to create videos that capture your vision, whether for promotional content, educational purposes, or community engagement.",
    icon: "mdi:monitor-cellphone-star",
    url: "/services/content-creation",
    videoUrl: cld.video("services/content").toURL()
  }
]

export default services;