// Render Page 的component
function ProductDetailPage(props) {
  const { loadedProduct } = props;
  console.log("run 3");

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

// server side傳入props的功能function
export async function getStaticProps(context) {
  console.log("run 2");

  // context 當使用者進入路由時,context會產生相關的資訊,可以藉由context先在server side 產生Html Dom
  const { params } = context;
  const productId = params.pid;
  const data = {
    products: [
      { id: "p1", title: "product 1" },
      { id: "p2", title: "product 2" },
      { id: "p3", title: "product 3" },
    ],
  };

  // 查看是否有匹配的資料, 沒有就會導向去404頁面
  const product = data.products.find((product) => product.id === productId);
  // console.log("run there", { context, data, product });
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: {
        title: product.id,
        description: ` ${product.title} 的詳細說明 `,
      },
    },
  };
}

async function getData() {
  return {
    products: [
      { id: "p1", title: "product 1" },
      // { id: "p2", title: "product 2" },
      // { id: "p3", title: "product 3" },
    ],
  };
}

// 這裡是設立 user 進入的可能,
// 去server 端抓取資料, 針對可能的路由進行設定,
// 舉例產品有3筆資料, 這裡是動態的頁面來產生相對應的頁面
// 這三筆資料的路由需要進行設定, user 才可以進入
// 相關的路由設定可能是藉由產品的id作為識別入口, 產品資料: {id:xxxx,name:xxxx,price: ....}
// getStaticPaths 去抓取資料之後並將其路由設定為"產品id" , 當想看產品1 的資料可以使用路由進入
// appdomain/product/pid1 就會找到 "pid1" 的產品
// 當使用者路由進入 不是產品資料匹配的 id 則會不會跑到該頁面

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  // console.log("run 1");
  // 設定 fallback的參數,
  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default ProductDetailPage;
