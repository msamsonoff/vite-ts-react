import { render, screen, waitFor } from '@testing-library/react'
import { Root } from './root'

describe('Root', () => {
    it('renders', async () => {
        render(<Root/>)
        await waitFor(() => expect(screen.getByTestId('root')).toHaveTextContent('Hello World'))
    })
})
