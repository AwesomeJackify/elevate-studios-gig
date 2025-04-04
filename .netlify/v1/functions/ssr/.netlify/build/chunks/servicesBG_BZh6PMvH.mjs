const servicesBG = new Proxy({"src":"/_astro/servicesBG.B-LyrNFE.jpg","width":2048,"height":1365,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackgong/Documents/Astro Media/elevate-studios-gig/src/assets/images/services/servicesBG.jpg";
							}
							
							return target[name];
						}
					});

export { servicesBG as default };
