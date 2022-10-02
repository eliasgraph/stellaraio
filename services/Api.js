import axios from "axios";
const url = 'https://api.stellaraio.com/wp-json/wp/v2'

const Api = () => {
	return axios.create({
		baseURL: url,
	});
};

export default Api