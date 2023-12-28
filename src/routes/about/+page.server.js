

// @ts-ignore
import data from "$lib/cms/pages/about.json" assert { type: "json" };
import settings from "$lib/cms/pages/main-settings.json" assert { type: "json" };
export function load() {
    return { data, settings };
}