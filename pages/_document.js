import Document, { Html, Head, Main, NextScript } from "next/document";

// _doucment 的話
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
