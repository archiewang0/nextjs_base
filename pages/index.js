// import Link from "next/link";
// our-domain.com/
// import fs from "fs/promises";
// import path from "path";
// import rootPath from "@rootPath";
import Test from "../components/layout/index";

function HomePage(props) {
  console.log("xxxxxxxxx!!!!!jlkjkljkl!");
  const { products } = props;
  // if (!products) return <div>Ladding...</div>;
  return (
    <ul>
      {products.map((i) => (
        <li key={Math.random()}>測試!!!!!!!{i.title}</li>
      ))}
      {/* <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li> */}
      <Test />
    </ul>
  );
}

// 當路由造訪該頁面的時候
// 會觸發getStaticProps function 並且將該function的回傳value以props的方式傳給homepage components

// when user entry this page router
// will triger getStaticProps function , and send props that is function return value to homepage components

// gpt Translation
// When the route visits that page,
// it triggers the "getStaticProps" function and passes the returned value as props to the "Homepage" component.

// const fileReaderGetData = async () => {
//   const filedata = await fs.readFile(
//     path.resolve(process.cwd(), "./data/dummy-backend.json")
//   );
//   const resultData = JSON.parse(filedata);
//   return resultData;
// };

export async function getStaticProps() {
  const resultData = {
    products: [
      { id: "p1", title: "product 1" },
      { id: "p2", title: "product 2" },
      { id: "p3", title: "product 3" },
    ],
  };
  // const resultData = await fileReaderGetData();

  // console.log("檢查 filedata 的內容;", resultData);

  // // ! 酷 -----

  // // __dirname 則是找到目前該檔案的位置在哪
  // // process.cwd() 可以找到你的根目錄
  // // console.log(
  // //   "findData122222: ",
  // //   path.join(process.cwd(), "data", "dummy-backend.json")
  // //   path.resolve(__dirname, "../data/dummy-backend.json")
  // // );

  // // console.log(
  // //   "check path.resolev: ",
  // //   path.resolve(process.cwd(), "./data/dummy-backend.json")
  // // );

  // // const DUMMY_DATA = {
  // //   products: [
  // //     { id: "p1", title: "product 1" },
  // //     { id: "p2", title: "product 2" },
  // //     { id: "p3", title: "product 3" },
  // //   ],
  // // };
  // console.log("這裡會從跑嗎1");

  return {
    props: {
      ...resultData,
    },
    revalidate: 10,
  };
}

// 這個props 會變成這頁的資料
// export async function getServerSideProps(context) {
//   const resultData = await useFileReaderGetData();
//   console.log("跑幾次！");
//   return {
//     props: {
//       ...resultData,
//     },
//     // revalidate: 10,
//   };
// }

export default HomePage;
