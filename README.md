# Apontamentos de Sabado

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## Comandos Linux

`.` - A partir do diretorio onde te encontras para a frente  
`..` - A partir do diretorio onde te encontras para tras  
`~` - Caminho relativo do diretorio Home  
`/` - Denomina o diretorio root  
`"diretorio"/` - Denomina um diretorio  

| Comando | Nome | Descricao |
| ----------- | ----------- | ----------- |
| `cd` | change directory | Navegar entre diretorios |
| `pwd` | print working directory | Mostar o caminho absoluto do directorio onde te encontras |
| `history` | --- | Mostrar os comandos utilizados ate ao momento |
| `touch` | --- | Criar ou dar update a hora e data de ficheiros |
| `ls` | to list files | Listar todos os ficheiros no diretorio |
| `ls -l` | --- | Listar todos os ficheiros no diretorio em forma de lista e com informacoes extra |
| `ls -a` | --- | Listar todos os ficheiros no diretorio inclusive os que comecao por . |
| `ls -la` | --- | Combinacao dos comandos anteriores |
| `cat` | Concatenate | printar conteudos de ficheiro na consola |
| `clear` | --- | Limpar a consola |
| `nano` | --- | Editor de texto na consola |
| `mv` | move | Move ficheiros ou diretorios. Se o sujeito for movido para o mesmo local e o nome for alterado funciona como um rename |
| `rm` | Remove | Apaga ficheiros ou diretorios |
| `rm -r` | Remove recursivamente | Usado para apagar diretorios que por sua vez estejam vazios ou com ficheiros |

## git

Todos os comandos comecam com `git`  

| Comando | Descricao |
| ----------- | ----------- |
| `checkout` | Mudar de branch |
| `checkout -b` |Criar uma branch e coloca-te nela |
| `add` | Dar stage das alteracoes que queremos fazer commit |
| `commit -m` | Aplicar as alteracoes que foram staged, criando uma nova versao dos ficheiros alterados mantendo um historico das alteracoes antigas. `-m` Aplica uma mensagem ao commit |
| `push` | Manda as alteracoes do commit para o repositorio remoto. Para o repositorio remoto receber alteracoes o meu branch tem que existir la |
| `status` | Mostra alteracoes de ficheiros: criacao, modificacao, remocao. Que ficheiros foram alterados. Os ficheiros que estao staged para serem committed |
| `fetch` | Puxa as alteracoes do repositorio remoto para o repositorio local |
| `merge <source branch>` | Aplica as alteracoes existentes no source branch |
| `pull` | Puxa alteracoes do repositorio remoto para o repositorio local aplicando logo as alteracoes. isto e a juncao do `git fetch` e o `git merge` |
