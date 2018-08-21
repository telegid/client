import {fetchData} from './utils/fetchData';
import {Config} from '../../config';

export const fetchRepoInfo = async (releaseDate: string, repoName: string) => {
    return fetchData(`${Config.BasePath}/repos/${releaseDate}/${repoName}`);
};
