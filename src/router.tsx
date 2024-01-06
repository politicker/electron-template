import {
	Route,
	createMemoryRouter,
	createRoutesFromElements,
	redirect,
} from 'react-router-dom'
import { Root } from './components/Root'
import { Page } from './lib/types'

export const router = createMemoryRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index loader={() => redirect(Page.DEFAULT)} />
			<Route path={Page.DEFAULT} element={<div>hello from default</div>} />
		</Route>,
	),
)
