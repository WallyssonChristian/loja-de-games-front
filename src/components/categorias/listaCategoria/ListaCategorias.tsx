import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import { DNA } from "react-loader-spinner"
import CardCategoria from "../cardCategoria/CardCategoria"

{/** Componente responsavel por mostrar uma lista das Categorias */}
function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    {/* Função assincrona para buscar Categorias */ }
    async function buscarCategorias() {
        try {
            {/** await espera a resposta da função buscar, passando o caminho, 
            e o que vai ser feito com os dados obtidos, no caso ele vai alterar 
            os dados locais 'categorias' */}
            await buscar('/categorias', setCategorias)
            {/** error:any trata qualquer erro recebido como sendo do tipo Any, 
            permitindo a flexibilidade no manuseio do erro. */ }
        } catch (error: any) {
            alert("Erro ao buscar Categorias")
            console.log(error);

        }
    }

    {/** Hook do React que permite executar efeitos colaterais quando a variavel 
    que ele esta observando recebe alterações, nesse caso, o tamanho de categorias */ }
    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {/** Animação de busca */}
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ListaCategorias