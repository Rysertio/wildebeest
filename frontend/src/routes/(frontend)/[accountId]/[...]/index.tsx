import { component$ } from '@builder.io/qwik'
import { loader$ } from '@builder.io/qwik-city'

export const loader = loader$(({ redirect }) => {
	redirect(303, '/not-found')
})

export default component$(() => {
	loader.use()
	return <></>
})
