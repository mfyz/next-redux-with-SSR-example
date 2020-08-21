import React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

import { wrapper } from '../store'
import { getCities } from '../actions'
import Layout from '../components/layout'

class Cities extends React.Component {
	componentDidMount() {
		const { getCitiesAction } = this.props
		getCitiesAction()
	}

	render() {
		const { cities, citiesServer } = this.props

		const citiesList = cities || citiesServer

		return (
			<Layout>
				<Head>
					<title>Cities page</title>
				</Head>
				<h1>Cities (Europe)</h1>
				<ul>
					{citiesList.map((city) => (
						<li>
							<Link
								href={`/time/[city]`}
								as={`/time/${city.split('/')[1]}`}
							>
								<a>{city.split('/')[1]}</a>
							</Link>
						</li>
					))}
				</ul>
			</Layout>
		)
	}
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	const citiesServer = await getCities(store.dispatch)()
	return {
		props: { citiesServer }
	}
})

const mapStateToProps = state => ({
	cities: state.time.cities
})

const mapDispatchToProps = (dispatch) => ({
	getCitiesAction: getCities(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
