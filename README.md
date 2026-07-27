# Diego Brandão Veículos

Site institucional estático feito com HTML, CSS e JavaScript puro. Não precisa instalar nada: basta abrir o arquivo `index.html` no navegador.

## Como adicionar um carro novo

1. Abra `js/carros-dados.js` no VS Code.
2. Copie um dos blocos que já estão dentro de `const carros = [ ... ]`.
3. Cole-o antes do último `];` e altere os dados: `id`, marca, modelo, ano, preço, quilometragem, descrição e mensagem.
4. Use um `id` que ainda não exista. Por exemplo, se o último carro usa `id: 6`, o próximo deve usar `id: 7`.
5. Coloque as fotos em `assets/imagens/carros/` e informe o caminho no campo `imagens`. Exemplo: `"assets/imagens/carros/meu-carro-1.jpg"`.
6. Salve. O catálogo e os destaques serão atualizados automaticamente. Para fazer um carro aparecer em destaques, use `destaque: true`.

## Como remover um carro

No arquivo `js/carros-dados.js`, apague todo o bloco do carro que não deve mais aparecer (da abertura `{` até o fechamento `},`). Não é necessário alterar nenhum outro arquivo.

## Onde colocar as fotos

Todas as fotos devem ficar em `assets/imagens/carros/`. Depois, informe o nome do arquivo na lista `imagens` do respectivo veículo em `js/carros-dados.js`.

## Como trocar a logo

A logo usada no cabeçalho e no rodapé está em `assets/imagens/logo/logo-db.png`. Para substituí-la, coloque o novo arquivo nessa pasta e mantenha o mesmo nome, ou altere o caminho `logo-db.png` nas duas ocorrências do arquivo `index.html`.

## Como trocar o WhatsApp e o endereço

- **WhatsApp:** abra `js/whatsapp.js`. Na linha que começa com `const numeroWhatsApp`, troque `5581999999999` pelo número real, sempre com DDI e DDD, sem espaços nem símbolos.
- **Mensagem geral:** no mesmo arquivo, altere o texto em `mensagemWhatsAppGeral`.
- **Endereço, horário e mapa da página:** abra `index.html` e procure por `Endereço completo da revenda`. Troque os textos e o endereço usado na URL do mapa (`Recife,+PE`).
- **Mapa dentro do modal:** abra `js/modal-carro.js` e troque `Recife,+PE` pela localização da loja.

## Como trocar as cores

Abra `css/variables.css`. As cores principais estão no início do arquivo. A cor de destaque atual é `--color-accent`. Altere seu código hexadecimal para mudar botões e detalhes do site.

## Como testar no computador

Você pode dar dois cliques em `index.html` para abrir o site no navegador. Para uma experiência de edição melhor, instale a extensão **Live Server** no VS Code, clique com o botão direito em `index.html` e selecione **Open with Live Server**.

## Publicação gratuita

O projeto pode ser publicado diretamente no Netlify, Vercel ou GitHub Pages. Como é um site estático, não exige servidor nem banco de dados: envie a pasta inteira `db-veiculos` para a plataforma escolhida.
