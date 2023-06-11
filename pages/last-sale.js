import { useEffect, useState } from "react";

const lastSale = (props) => {
	const [sales, setSalses] = useState(props.sales);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const data = await fetch(
				"https://next-course-92db7-default-rtdb.firebaseio.com/sales.json"
			).then((d) => d.json());
			setIsLoading(false);
			setSalses(data); //之後Client Side 會再次fetch Data
		};

		const intervalFetchData = setInterval(() => {
			fetchData();
			console.log("Client Side FetchData!!!");
		}, 3000);

		return () => {
			clearInterval(intervalFetchData);
		};
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (!sales) return <div>沒有Data</div>;
	return (
		<div>
			{/* ['fdsacee','dsaf2ads'] */}
			{Object.keys(sales).map((i) => {
				return (
					<div key={i}>
						<p>{sales[i].username}</p>
						<span>{sales[i].volume}</span>
					</div>
				);
			})}
		</div>
	);
};

export default lastSale;

export const getStaticProps = async () => {
	const data = await fetch(
		"https://next-course-92db7-default-rtdb.firebaseio.com/sales.json"
	).then((d) => d.json());
	console.log("取得data: ", data);
	return {
		props: { sales: data },
		revalidate: 10,
	};
};
