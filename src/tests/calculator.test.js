import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from '../components/Calculator'

describe("testar calculator.js", () => {
    //exercicio 1
    test("componente está renderizando com os dígitos de operações +, -, *, /", () => {
        render(<Calculator />)
            const soma = screen.getByText("+")
            const subtracao = screen.getByText("-")
            const multiplicacao = screen.getByText("*")
            const divisao = screen.getByText("/")

            expect(soma).toBeInTheDocument()
            expect(subtracao).toBeInTheDocument()
            expect(multiplicacao).toBeInTheDocument()
            expect(divisao).toBeInTheDocument()
    })

    //exercicio 2
    test("multiplicação está funcionando", async () => {
        render(<Calculator />)
        const user = userEvent.setup()
        const cinco = screen.getByText("5")
        const dois = screen.getByText("2")
        const multiplicacao = screen.getByText("*")
        const igual = screen.getByText("=")

        await user.click(cinco)
        await user.click(multiplicacao)
        await user.click(dois)
        await user.click(igual)

        const resultado = screen.getByText("10")

        expect(resultado).toBeInTheDocument()
    })

    //exercicio 3
// 5 * 2 + 10 deve ser 20 e não 25
    test("concatenar operações está funcionando", async () => {
        render(<Calculator />)
        const user = userEvent.setup()
        const cinco = screen.getByText("5")
        const dois = screen.getByText("2")
        const um = screen.getByText("1")
        const zero = screen.getByRole('button', { name: /0/ })
        const soma = screen.getByText("+")
        const multiplicacao = screen.getByText("*")
        const igual = screen.getByText("=")

        await user.click(cinco)
        await user.click(multiplicacao)
        await user.click(dois)
        await user.click(soma)
        await user.click(um)
        await user.click(zero)
        await user.click(igual)

        const resultado = screen.getByText("20")

        expect(resultado).toBeInTheDocument()
    })
})