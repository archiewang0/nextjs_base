import { useRouter } from "next/router";

const BlogDetailPage = () => {
  const router = useRouter();
  //   console.log(router);
  console.log(router.query);
  return <div>到這邊來</div>;
};

export default BlogDetailPage;
