const API_URL = 'https://workspace-methed.vercel.app/'
const LOCATION_URL = 'api/locations'

const getData = async (url, cbSuccess, cbError) => {
	try {
		const responce = await fetch(url)
		const data = await responce.json()
		cbSuccess(data)
	} catch (err) {
		cbError(err)
	}
}

const init = () => {
	const citySelector = document.querySelector('#city')
	const cityChoices = new Choices(citySelector, {
		itemSelectText: '',
	})

	getData(
		`${API_URL}${LOCATION_URL}`,
		locationData => {
			const locations = locationData.map(location => ({
				value: location,
			}))
			cityChoices.setChoices(locations, 'value', 'label', true)
		},
		err => {
			console.log(err)
		}
	)
}

init()
