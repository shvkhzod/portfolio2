import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
    if (data && data.project) {
        return {
            project: data.project,
            layout: {
                fullWidth: true,
            },
        };
    }
    return { project: null };
};