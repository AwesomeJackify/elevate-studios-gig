/* empty css                                    */
import { c as createComponent, r as renderComponent, i as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_mq0E0Vla.mjs';
import 'kleur/colors';
import { a as $$Layout, c as config, $ as $$Icon } from '../chunks/Layout_Daw5NyMp.mjs';
import { Cloudinary } from '@cloudinary/url-gen';
import { a as getImage, $ as $$Image } from '../chunks/_astro_assets_D4egqPKp.mjs';
import servicesBG from '../chunks/servicesBG_BZh6PMvH.mjs';
import { s as services } from '../chunks/services_DTov1BbU.mjs';
import podcastImg from '../chunks/podcast_9rlHvc63.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const servicesBGImage = await getImage({ src: servicesBG });
  const needs = [
    {
      name: "Podcast"
    },
    {
      name: "Media"
    }
  ];
  const businessTypes = [
    {
      name: "Personal Brand"
    },
    {
      name: "Corporate"
    },
    {
      name: "Podcast"
    }
  ];
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dobgdy6fj"
    }
  });
  const introVideo = cld.video("hero2");
  const introVideoURL = introVideo.toURL();
  const podcastVideo = cld.video("premierepodcast");
  const podcastVideoURL = podcastVideo.toURL();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": config.businessName, "isAbsolute": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="relative mx-auto w-full h-screen flex items-center justify-center flex-col"> <div id="bg-cover" class="absolute top-0 left-0 w-full h-full bg-gradient-to-b to-black from-transparent from-10% opacity-0 -z-10"></div> <video id="introVideo" autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover -z-20"> <source${addAttribute(introVideoURL, "src")} type="video/mp4"> </video> <div class="flex flex-row gap-2 items-center text-center text-8xl max-2xl:text-4xl max-md:text-2xl text-white font-[Blacky] uppercase font-black tracking-wide max-w-screen-2xl mx-auto"> <h1 class="landing-text tracking-widest opacity-0">Inspire |</h1> <h1 class="landing-text tracking-widest opacity-0">Create |</h1> <h1 class="landing-text tracking-widest opacity-0">Innovate</h1> </div> </div> </section> <section class="bg-secondary py-16"> <div class="max-w-screen-xl mx-auto flex flex-col gap-4 px-4"> <h1 class="text-6xl max-md:text-5xl font-bold text-secondary-content">
Welcome to <br> Elevate Studios
</h1> <p class="max-w-3xl text-xl text-stone-300"> ${config.description} </p> <a href="/about-us" class="btn btn-lg w-fit btn-accent">Learn More</a> </div> </section> <section class="relative bg-cover bg-center bg-fixed"${addAttribute(`background-image: url(${servicesBGImage.src});`, "style")}> <div class="bg-gradient-to-b from-transparent to-primary absolute top-0 left-0 w-full h-full opacity-100 max-md:bg-primary"></div> <div class="max-w-screen-2xl mx-auto flex flex-col items-center gap-16 2xl:py-72 py-32 px-4"> <h1 class="text-center text-4xl 2xl:text-6xl w-full font-medium text-primary-content z-50">
We produce the media <br> so that you can focus on what matters
</h1> <div class="flex flex-row max-md:flex-col max-md:gap-2 gap-8 mx-auto"> ${services.map((service) => renderTemplate`<a${addAttribute(service.url, "href")}${addAttribute(`group transition-colors w-full py-4 px-8 max-md:p-2 overflow-hidden text-center uppercase relative items-center flex flex-col gap-2`, "class")}> <h1 class="z-10 2xl:text-2xl relative font-bold text-primary-content whitespace-pre-line"> ${service.name} </h1> ${renderComponent($$result2, "Icon", $$Icon, { "name": service.icon, "class": "text-8xl group-hover:opacity-90 opacity-50 duration-300 text-primary-content" })} </a>`)} </div> </div> </section> <section class="bg-secondary"> <div class="flex items-center justify-center flex-col max-w-screen-2xl mx-auto gap-16 max-md:gap-8 px-4 py-32 max-md:py-16"> <div class="grid grid-cols-2 max-md:grid-cols-1 gap-16 max-md:gap-8"> <div class="flex flex-col gap-16 max-md:gap-8"> <h1 class="2xl:text-8xl text-6xl font-bold text-secondary-content self-start">
Auckland's Premier <br>Podcast Studio
</h1> <p class="text-secondary-content grid place-content-center text-2xl max-md:text-md">
Ready to grow your brand, expand your business, or share your
            expertise? It's time to press record. At Elevate Studios, we provide
            a premium podcasting space where you can craft a custom set that
            sets you apart. Create a high-quality podcast that positions you as
            an industry leader and makes a lasting impact. <br><br>Let's
            make your voice heard—book your session today!
</p> </div> <video id="podcastVideo" autoplay loop muted playsinline controls class="w-full h-full object-cover"> <source${addAttribute(podcastVideoURL, "src")} type="video/mp4"> </video> </div> <div class="overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": podcastImg, "alt": "Podcast Studio", "class": "w-full aspect-[16/7] max-md:aspect-square object-cover" })} </div> </div> </section> <section class="py-16 bg-primary" id="contact"> <div class="flex flex-col max-w-screen-xl mx-auto px-4 gap-16 max-md:gap-8"> <div class="flex flex-col gap-8 text-base-200"> <h1 class="text-6xl font-black">Keen to talk? Lets get it!</h1> <p class="font-light text-2xl">
Ready to start your project or have questions about our community
          programs? Reach out today, and let's elevate our stories together.
</p> <form name="contact" data-netlify="true" class="col-span-2 w-full flex flex-col gap-4 max-md:col-span-1"> <div class="grid grid-cols-2 gap-8 max-md:gap-4 w-full max-md:grid-cols-1"> <div class="flex flex-col gap-4"> <div class="flex flex-col gap-1"> <label class="text-xl">Full Name</label> <label class="input input-bordered flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:user", "class": "text-3xl" })} <input type="text" class="grow text-stone-700" name="name" placeholder="Enter your name..."> </label> </div> <div class="flex flex-col gap-1"> <label class="text-xl">Email Address</label> <label class="input input-bordered flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:email", "class": "text-3xl" })} <input type="text" class="grow text-stone-700" name="email" placeholder="Enter your email..."> </label> </div> <div class="flex flex-col gap-1"> <label class="text-xl">Phone Number</label> <label class="input input-bordered flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:phone", "class": "text-3xl" })} <input type="text" class="grow text-stone-700" name="phone" placeholder="Enter your phone number..."> </label> </div> <div class="flex flex-col gap-1"> <label class="text-xl">What services are you interested in?</label> <div class="flex flex-wrap gap-2"> ${needs.map((need) => renderTemplate`<label class="inline-flex items-center"> <input type="checkbox" name="services" class="checkbox checkbox-secondary"${addAttribute(need.name, "value")}> <span class="ml-2 text-primary-content"> ${need.name} </span> </label>`)} </div> </div> <div class="flex flex-col gap-1"> <label class="text-xl">Business Type</label> <div class="flex flex-wrap gap-2"> ${businessTypes.map((businessType) => renderTemplate`<div class="form-control"> <label class="label cursor-pointer gap-2 pl-0"> <input type="radio" name="Business Type"${addAttribute(businessType.name, "value")} class="radio radio-secondary"> <span class="label-text text-primary-content"> ${businessType.name} </span> </label> </div>`)} </div> </div> </div> <div class="flex flex-col gap-1"> <label class="text-xl">Message</label> <textarea name="message" class="textarea text-stone-700 textarea-bordered h-full w-full resize-none" placeholder="I want to know more about..."></textarea> </div> </div> <button type="submit" class="btn-accent btn w-fit ml-auto">Submit</button> </form> <div class="flex flex-col rounded-2xl gap-4"> <!-- <ul class="text-base-100 text-xl">
            <li>
              Phone: <a class="link link-hover" href={config.phone.url}
                >{config.phone.name}</a
              >
            </li>
            <li>
              Email: <a class="link link-hover" href={config.email.url}
                >{config.email.name}</a
              >
            </li>
          </ul> --> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/index.astro", void 0);
const $$file = "/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
