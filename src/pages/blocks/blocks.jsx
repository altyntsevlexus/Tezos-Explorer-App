/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useBlocksState } from '../../context/blocksContext.jsx';

import Header from '../../components/shared/Header';
import Title from '../../components/shared/Title';

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
    name: 'Baker',
    key: 'baker',
  },
  {
    name: 'Created',
    key: 'timestamp',
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
    <>
      <Header />
      <section className={`wrapper ${styled.blocks}`}>
        <Title value="Blocks" />
        <div className={styled.blocks__overflow}>
          <PerPage limit={limit} handleChangeLimit={onLimitChanged} />
          <Table
            cols={HEADERS}
            rows={blocks}
            currentSort={sort}
            sortFunction={onSortBy}
          />
          <Pagination onPageChanged={onPageChanged} currentPage={currentPage} />
        </div>
      </section>
    </>
  );
};

export default Blocks;
