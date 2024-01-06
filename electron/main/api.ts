import z from 'zod'
import { initTRPC } from '@trpc/server'
import {
	FetchTransactionsInput,
	fetchTransactions,
} from './models/transactions'

const t = initTRPC.create({ isServer: true })

export const router = t.router({
	greeting: t.procedure.input(z.object({ name: z.string() })).query((req) => {
		const { input } = req

		return {
			text: `Hello ${input.name}` as const,
		}
	}),
	getSomething: t.procedure
		.input(FetchTransactionsInput)
		.query(async ({ input }) => {
			console.log('@trpc: fetching transactions', input)
			return await fetchTransactions(input)
		}),
	changeSomething: t.procedure.mutation(async () => {
		return { success: true }
	}),
})

export type AppRouter = typeof router
