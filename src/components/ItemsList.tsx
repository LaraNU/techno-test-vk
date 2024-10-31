import styles from "./ItemsList.module.css";
import { observer } from "mobx-react-lite";
import repositoriesStore from "../stores/repositories-store";
import { useEffect, useState } from "react";
import Item from "./Item";

const ItemsList = observer(() => {
  const [page, setPage] = useState(1);
  const {
    getRepositoriesAction,
    repositories,
    deleteRepository,
    editRepository,
  } = repositoriesStore;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getRepositoriesAction(page.toString(), page > 1);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div className={styles.title}>Repositories Lists</div>
      <ul>
        {repositories.map((repo) => (
          <Item
            id={repo.id}
            key={repo.id}
            name={repo.name}
            description={repo.description}
            owner={{ avatar_url: repo.owner.avatar_url }}
            onDelete={() => deleteRepository(repo.id)}
            onEdit={(updatedData) => editRepository(repo.id, updatedData)}
          />
        ))}
      </ul>
    </>
  );
});

export default ItemsList;
