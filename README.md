# S6-E1 Entrega: Catálogo Geek

## Introdução

Você foi convidado para ajudar alguns desenvolvedores a criar uma página Geek.
Inicialmente vocês usarão a página para listar os produtos que eles possuem em 
estoque e efetuarão as vendas por telefone ou aplicativos de venda.
Em suma, um catálogo virtual.

## nota:

fiz o JS um pouco diferente. pois não separei a lista netes de criar o card. a propria função que cria o card avalia seu destino.

```jsx
//   ... minha função createCard ...
// colocando no HTML
    if (cardObj.type === 'Painting'){
        return paints.appendChild(card)
    }
    if(cardObj.type === 'Action Figures'){
        return actionFigures.appendChild(card)
    }
}
for(let i = 0; i < itens.length; i++){
    createCard(itens[i])
}
```

configurando o deck de cartas:

![Untitled](readmeImg/Untitled.png)

![Untitled](readmeImg/Untitled%201.png)

com o JS implementado falta só arrumar as imagens

![Untitled](readmeImg/Untitled%202.png)

![Untitled](readmeImg/Untitled%203.png)

as imagens agora estão um pouco esticadas mas é por conta do formato delas não ser compatível com o estilo que foi solicitado.

![Untitled](readmeImg/Untitled%204.png)

Corrigido um erro de digitação

![Untitled](readmeImg/Untitled%205.png)