import { useRouter } from "next/router";

const CasualPage = (props) => {
  const router = useRouter();
  console.log("檢查 router.pathname", router.pathname);
  console.log("檢查 router.query", router.query);
  console.log("檢查 router.query", router.query.id);

  return <h1>this is casual other page_{router.query.id}</h1>;
};

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { otherPage: "xxx" } }, { params: { otherPage: "ooo" } }],
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   // context 會指向 getStaticPaths 的內容
//   const data = context.params.otherPage;
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

export default CasualPage;
