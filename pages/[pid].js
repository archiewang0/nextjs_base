const rootIdPage = () => {
  return <h1>這是about 頁面</h1>;
};

// 在dynamic file 使用 getStaticProps 會將路由的資料帶入 context 的東西
export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;
};

export default rootIdPage;
