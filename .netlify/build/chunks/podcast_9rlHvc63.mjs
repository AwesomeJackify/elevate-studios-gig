const podcastImg = new Proxy({"src":"/_astro/podcast.CASCQpvg.jpg","width":2047,"height":811,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/hero/podcast.jpg";
							}
							
							return target[name];
						}
					});

export { podcastImg as default };
