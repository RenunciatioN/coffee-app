import  ky  from 'ky';

const getData = async (endpoint) => {
	try {
		const url = `https://6417506248771f3940388e73.mockapi.io/${endpoint}`
		const data = await ky.get(`${url}`).json();
		return data
	} catch (err) {
		console.error(err);
	}
};


export default getData