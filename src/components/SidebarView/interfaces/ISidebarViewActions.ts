export interface ISidebarViewActions {
    requestRepoInfoAction (repoName: string): void;

    fetchReposAction (releaseDate: string): void;
}
