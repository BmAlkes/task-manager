## Instruções

#### IMPORTANTE    
  - Primeiro, vamo fazer o projeto sem utilização de back-end, quando tu conseguir fazer direitinho
  a gente pula pra adição de back-end e um grau de complexidade maior

1 - Definir as rotas do projeto (Home e Edit)
    - Rota Home se refere ao componente Home e é representada pela rota '/' 
    - Rota Edit se refere ao componente Edit e é representada pela rota '/edit/:id'

2 - Criar estado principal do projeto no App.js utilizando useState
    - Estado onde as tarefas vão vai ficar armazenadas
    - O estado deve se chamar tasks e função setadora setTasks.

3 - Página Home
    - Passar o valor do tasks e função setTasks do App.js para a página Home através de props (de cima para baixo - Prop Drilling)
        - Exemplo: <Home tasks={tasks} setTasks={setTasks} />
    - Rebecer a tasks e setTasks através da props no componente Home.
    - Criar um useEffect, fazendo uma chamada para a fake api e adicionando as tasks através do setTasks.

    - Criação de formulário responsável pela adição de tarefas
        - Estilização
        - Criação de estado referente ao valor do input (name, setName)
        - Adição de evento onChange e valor no input 
            - onChange={event => setName(event.target.value)}
            - value={name}
        - Adição de evento onSubmit no formulário
        - Criação de função para ser utilizada no onSubmit (handleSubmit)
            - Toda vez que utilizar o evento onSubmit, de padrão já colocar na função event.preventDefault()
        - Adicionar na tasks a nova task criada através da imutabilidade do React
            - Na função handleSubmit, adicionar a task através da função setadora setTask:
                - setTask[...tasks, { name, completed: false }] (conceito de imutabilidade, nunca modificar o original)
                - Adicionar na fake api a task utilizando axios (método POST)
                - setName('') para zerar o valor do input
                - Adicionar mensagem a sua escolha dizendo que conseguiu criar uma task

    - Criação de lista para mostrar as tarefas (ul e li) 
        - Estilização tanto da task (li) quanto do container (ul)
        - Método map no estado tasks retornando o elemento li (obrigatório adicionar key para diferenciar as tasks):
        - No ícones de editar, adicionar um <Link to='/edit/${task.id}'> para ir para o componente de edit com o ID da task clicada.
        - No icone de remover, adicionar um função responsável por remover a task. (dica: use o método filter e a ID da task)
            - {tasks.map(task => (
                <li key={task.id}>
                    {task.name}
                    resto
                </li>
            ))}
        
4 - Página Edit
    - Passar o valor do tasks e função setTasks do App.js para a página Edit através de props (de cima para baixo - Prop Drilling)
        - Exemplo: <Edit tasks={tasks} setTasks={setTasks} />
    - Rebecer a tasks e setTasks através da props no componente Edit.

    - Criação de estado [task, setTask].
    
    - Utilizar o hook useParams para receber o parâmetro enviado (nesse caso, o ID da task).
    - Criar um useEffect, fazendo uma chamada a API com o id (do useParams) e adicionando ao estado task, e botando 
    no array de dependência o ID, ou seja, toda vez que o ID da página edit mudar (clicar em edit de outra task), mais uma chamada a API vai ser feita com o novo ID.

    - Estilização 
    
    - Criação de novo formulário com todas as informações
        - Adição de onSubmit no form e onChange nos inputs.
        - onSubmit recebe uma função handleSubmit responsável por atualizar as tasks.


        - Função handleSubmit
            - Utilizando setTasks para modificar o valor da task (dica: use o método map e o id da task)
            - Modificação do edit padrão utilizando axios (método PATCH)
            - Caso edite a task, navegue para a Home utilizando navigate('/').