import { makeAutoObservable, runInAction } from "mobx";
import getRepositories from "../api/githubApi";
import { Repositories } from "../api/githubApi";

class RepositoriesStore {
  repositories: Repositories[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getRepositoriesAction = async (page: string, append = false) => {
    try {
      this.isLoading = true;
      const res = await getRepositories(page);

      runInAction(() => {
        this.repositories = append ? [...this.repositories, ...res] : res;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  };

  editRepository = (id: number, updatedData: Partial<Repositories>) => {
    const repoIndex = this.repositories.findIndex((repo) => repo.id === id);
    if (repoIndex !== -1) {
      this.repositories[repoIndex] = {
        ...this.repositories[repoIndex],
        ...updatedData,
      };
    }
  };

  deleteRepository = (id: number) => {
    runInAction(() => {
      this.repositories = this.repositories.filter((repo) => repo.id !== id);
    });
  };
}

export default new RepositoriesStore();
