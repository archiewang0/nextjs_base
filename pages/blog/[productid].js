import { useRouter } from "next/router";

const BlogDetailPage = () => {
  const router = useRouter();
  //   console.log(router);
  console.log(router.query);
  return <div>到productid 這邊！！！！</div>;
};

export default BlogDetailPage;
