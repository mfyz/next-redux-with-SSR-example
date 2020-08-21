import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from "next-redux-wrapper"

import { wrapper } from '../store'
import Layout from '../components/layout'

class MyApp extends App {
	static async getStaticProps({Component, ctx}) {
		const pageProps = Component.getStaticProps ? await Component.getStaticProps(ctx) : {}
		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Component {...pageProps} />
		)
	}
}

export default wrapper.withRedux(MyApp)