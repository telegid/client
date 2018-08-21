export interface IConfig {
    Routes: {
        Organisation: string;
        Repo: string;

        DefaultOrganisation: string;
        Home: string;
    };
    BasePath: string;
    DefaultOrganisationId: string;
    ResultsPerPage: number;
    AccessToken: string;
}

const DefaultOrganisationId = 'facebook';

export const Config: IConfig = {
    BasePath: 'http://localhost:8000',
    Routes: {
        Organisation: '/date/:releaseDate',
        Repo: '/date/:releaseDate/:repoId',

        DefaultOrganisation: `/date/${DefaultOrganisationId}`,
        Home: '/'
    },
    DefaultOrganisationId,
    ResultsPerPage: 100,
    AccessToken: process.env.GITHUB_ACCESS_TOKEN!
};
