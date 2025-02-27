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
    description:
      "Step into our state-of-the-art studio, equipped with multiple sets designed to meet all your podcasting needs. From concept to completion, our team of expert videographers and audio engineers ensure every detail is perfectly executed. With specialised professionals dedicated to their craft, we guarantee high-quality production that elevates your content. \n\nWe shoot in stunning 4K, delivering crystal-clear visuals and professionally engineered audio, perfect for social media clips that captivate and engage your audience. Boost your business, personal brand and presence, driving meaningful interaction with expertly crafted content that speaks to your brand.",
    icon: "mdi:podcast",
    url: "/services/podcast-production",
    videoUrl: cld.video("services/podcast").toURL(),
  },
  {
    name: "Video\nProduction",
    description:
      "Bring your vision to life with our top-tier video production services. Whether it's for branding, promotional content, or storytelling, our fully-equipped studio and experienced team are here to make your ideas shine. From concept development to post-production, we handle every step with precision and creativity. \n\nOur skilled videographers, editors, and sound engineers work seamlessly together to produce videos that captivate and engage. We deliver stunning visuals in 4K, ensuring your content looks flawless across all platforms. Whether you need videos for social media, websites, or marketing campaigns, we're here to craft content that connects and drives results.",
    icon: "mdi:video",
    url: "/services/video-production",
    videoUrl: cld.video("services/video").toURL(),
  },
  {
    name: "Content\nCreation",
    description:
      "At the heart of every great brand is compelling content. Our content creation services are designed to tell your story, captivate your audience, and drive results. From engaging videos to eye-catching graphics and written content, we craft customized material that aligns with your brand voice and goals. \n\nOur team of creative professionals works closely with you to develop content that resonates with your target audience. Whether it’s social media posts, blog articles, or promotional videos, we ensure your content not only grabs attention but also sparks meaningful engagement. Let us help you build a strong, authentic presence that elevates your brand and grows your business.",
    icon: "mdi:monitor-cellphone-star",
    url: "/services/content-creation",
    videoUrl: cld.video("services/content").toURL(),
  },
];

export default services;
