/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useBlocksState } from '../../context/blocksContext.jsx';

import Header from '../../components/shared/Header';
import Title from '../../components/shared/Title';
import Footer from '../../components/shared/Footer';

import Pagination from '../../components/blocks/Pagination';
import Table from '../../components/blocks/Table';
import PerPage from '../../components/blocks/PerPage.jsx';

import styled from './_blocks.module.scss';

const HEADERS = [
  {
    name: 'Block Id',
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
    name: 'Endorsements',
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
  const { blocks, handleBlocks } = useBlocksState();
  const [limit, setLimit] = useState('15');
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    key: 'level',
    direction: false,
  });

  const onPageChanged = (page) => {
    setCurrentPage(page);
    setSort({
      key: 'level',
      direction: false,
    });
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

  return (
    <main className={`wrapper ${styled.blocks}`}>
      <Title value="Blocks" />
      <PerPage limit={limit} handleChangeLimit={onLimitChanged} />
      <div className={styled.blocks__overflow}>
        <Table
          cols={HEADERS}
          rows={blocks}
          currentSort={sort}
          sortFunction={onSortBy}
        />
      </div>
      <Pagination onPageChanged={onPageChanged} currentPage={currentPage} />
    </main>
  );
};

export default Blocks;
