import Image from 'next/image';
import Link from 'next/link';

import { SearchForm } from './SearchForm';

import backArrow from 'public/img/searchBackArrow.svg';
import classes from './Search.module.scss';

export const Search = ({ setAdvList, avalaibleMakes, advList }) => {
  return (
    <div className={classes.title}>
      <div className={classes.title_backArrow}>
        <Link href="/main">
          <Image src={backArrow} width={83} height={83} />
        </Link>
      </div>
      <div className={classes.title_formBlock}>
        <SearchForm
          setAdvList={setAdvList}
          avalaibleMakes={avalaibleMakes}
          advList={advList}
        />
      </div>
    </div>
  );
};
