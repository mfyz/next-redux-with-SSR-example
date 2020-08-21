import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
	const router = useRouter()
	return (
		<div className="header">
			<h1>Site</h1>
			<ul>
				<li className={(router.pathname == '/' ? 'active' : '')}>
					<Link href="/"><span>Home</span></Link>
				</li>
				<li className={(router.pathname == '/cities' ? 'active' : '')}>
					<Link href="/cities"><span>Cities</span></Link>
				</li>
			</ul>
		</div>
	)
}

export default Header