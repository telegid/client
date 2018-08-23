export interface IConfig {
    Routes: {
        Channels: string;
        Channel: string;

        Home: string;
    };
    BasePath: string;
    AccessToken: string;
}

export const Config: IConfig = {
    BasePath: 'http://localhost:8000',
    Routes: {
        Channels: '/date/:releaseDate',
        Channel: '/date/:releaseDate/:channelId',

        Home: '/'
    },
    AccessToken: process.env.GITHUB_ACCESS_TOKEN!
};
