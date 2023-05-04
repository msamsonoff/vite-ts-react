import { createRoot } from 'react-dom/client'
import { Root } from './src/root'

for (const container of document.getElementsByClassName('s-Root')) {
    const root = createRoot(container)
    const element = <Root/>
    root.render(element)
}
