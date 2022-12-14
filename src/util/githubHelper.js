
import { Octokit} from "octokit";

const TOKEN = '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';

const REPO_LIST = [
    'tour_api',
    'task_manager2',
    'EnglishSpanishTranslation',
    'Calculator',
    'Crapstone',    
]

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: TOKEN });

const login = async () => {
    // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
    const loginData = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", loginData.data.login);
}

const getRepos = async () => {
    const repoRes = await octokit.request(`GET /user/repos?visibility=public&sort=updated&per_page=100`, {})
    console.log(repoRes)
    return repoRes.data.filter(repo => REPO_LIST.includes(repo.name))
}

const githubHelper = {
    login,
    getRepos,
};

export default githubHelper;
