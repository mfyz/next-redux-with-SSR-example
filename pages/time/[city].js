import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Head from 'next/head'

import { wrapper } from '../../store'
import { getCities, getTime } from '../../actions'
import Layout from '../../components/layout'

class Time extends React.Component {
	componentDidMount() {
		const { getTimeAction, router } = this.props
		const { city } = router.query
		getTimeAction(city)
	}

	render() {
		const { time, timeServer, router } = this.props
		const { city } = router.query

		return (
			<Layout>
				<Head>
					<title>Time page</title>
				</Head>
				<h1>Time in {city}</h1>
				<h2>
					{time || timeServer}
				</h2>
			</Layout>
		)
	}
}

export async function getStaticPaths() {
	const paths = []
	
	const citiesList = await getCities()()
	console.log(citiesList)
	citiesList.forEach((city) => {
		paths.push({ params: { city: city.split('/')[1] } })
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
	const timeServer = await getTime(store.dispatch)(params.city)
	return {
		props: { timeServer },
		revalidate: 60 // SSR will be incrementally refreshed every 60 seconds (if there is any hit)
	}
})

const mapStateToProps = state => ({
	time: state.time.value
})

const mapDispatchToProps = (dispatch) => ({
	getTimeAction: getTime(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Time))
