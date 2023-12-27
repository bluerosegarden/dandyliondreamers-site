
export function load() {
    const portfolioModules = import.meta.glob("$lib/cms/portfolio/*.json");
        // @ts-ignore
        let portArr= [];
        for (const modulePath in portfolioModules) {
            // @ts-ignore
            portfolioModules[modulePath]().then(({ default: imageUrl }) => {
                portArr.push(imageUrl);
            });
        }
        // @ts-ignore
    return { portArr };
}