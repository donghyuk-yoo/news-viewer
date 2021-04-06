import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

function NewsPage({ match }) {
  // 선택되지 않았을 시 all 사용
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
