import { useEffect, useState } from 'react';
import { useBlocksState } from '../../context/blocksContext';

import Title from '../../components/shared/Title';
import Breadcrumbs from '../../components/shared/Breadcrumbs/Breadcrumbs';
import Pagination from '../../components/table/Pagination';
import Table from '../../components/table/Table';
import PerPage from '../../components/table/PerPage';

import styled from './_blocks.module.scss';
import useCurrentLocation from '../../hooks/useCurrentLocation';

const HEADERS = [
  {
    name: 'Block ID',
    key: 'level',
  },
  {
    name: 'Created',
    key: 'timestamp',
  },
  {
    name: 'Baker',
    key: 'baker',
  },
  {
    name: 'Priority',
    key: 'priority',
  },
  {
    name: '# of operations',
    key: 'numOfOperations',
  },
  {
    name: 'Volume',
    key: 'volume',
  },
  {
    name: 'Fees',
    key: 'fees',
  },
  {
    name: '# of endorsements',
    key: 'endorsements',
  },
];

const byField = (field) => (a, b) => {
  if (Number(a[field])) {
    return a[field] - b[field];
  }
  return a[field].localeCompare(b[field]);
};

const Blocks = () => {
  const { blocks, handleBlocks, total } = useBlocksState();
  const [limit, setLimit] = useState('15');
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    key: 'level',
    direction: false,
  });

  const totalPages = Math.ceil(total / limit);

  const onPageChanged = (page) => {
    setCurrentPage(page);
    setSort({
      key: 'level',
      direction: false,
    });
    window.scrollTo(0, 0);
  };

  const onLimitChanged = (e) => {
    setLimit(e.target.value);
    onPageChanged(1);
  };

  const onSortBy = (e) => {
    const { value } = e.target;

    if (sort.key === value) {
      if (sort.direction) {
        blocks.reverse(byField(value));
      } else {
        blocks.sort(byField(value));
      }
      setSort({
        key: value,
        direction: !sort.direction,
      });
    } else {
      setSort({
        key: value,
        direction: true,
      });
      blocks.sort(byField(value));
    }
  };

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    handleBlocks(offset, limit);
  }, [currentPage, limit]);

  const { title } = useCurrentLocation();

  return (
    <main className="wrapper">
      <Breadcrumbs />
      <Title value={title} className={styled.blocks__title} />
      <div className={styled.blocks}>
        <Table
          cols={HEADERS}
          rows={blocks}
          currentSort={sort}
          sortFunction={onSortBy}
        />
        <nav className={styled.blocks__navigation}>
          <PerPage limit={limit} handleChangeLimit={onLimitChanged} />
          <Pagination
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </nav>
      </div>
    </main>
  );
};

export default Blocks;
