import { SearchForm } from './SearchForm';
import classes from './Search.module.scss';

export const Search = ({ setAdvList }) => {
  return (
    <div className={classes.title}>
      <div className={classes.title_formBlock}>
        <SearchForm setAdvList={setAdvList} />
      </div>
    </div>
  );
};
