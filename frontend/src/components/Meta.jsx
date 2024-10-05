import { Helmet } from 'react-helmet-async';

const Meta = ({
	title = 'PCBay - Best PC Products for cheap',
	description = 'We sell the best products for cheap',
	keywords = 'electronics, buy electronics, cheap electroincs',
}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

export default Meta;
