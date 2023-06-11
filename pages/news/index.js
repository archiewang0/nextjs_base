// our-domain.com/news
import Link from "next/link";
const NewsPage = () => {
	return (
		<>
			<h1>this is NewsPage</h1>
			<ul>
				<li>
					<Link href="/news/other">前往other頁面</Link>
				</li>
				<li>
					<Link href="/news/1212323">前往1212323頁面</Link>
				</li>
				<li>
					<Link href="/">前往index頁面</Link>
				</li>
			</ul>
		</>
	);
};

export default NewsPage;
