import { Link } from 'react-router-dom'

export function FormularioInicialMH() {
    return (
        <section className="home-card">
            <p className="eyebrow">Início</p>
            <h2>Escolha o módulo que quer calcular</h2>
            <p>
                Use este painel para ir direto para o formulário de malha horizontal ou
                para o backbone.
            </p>

            <div className="home-actions">
                <Link className="button-link" to="/malha-horizontal">
                    Abrir malha horizontal
                </Link>
                <Link className="button-link secondary" to="/backbone">
                    Abrir backbone
                </Link>
            </div>
        </section>
    )
}