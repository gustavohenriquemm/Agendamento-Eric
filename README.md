# Eric — prévia do novo site

Site local de teste com três rotas: `/`, `/ministerio` e `/agendamento`.

A página Ministério inclui uma galeria com cinco vídeos já publicados no site anterior. Os vídeos são carregados apenas quando escolhidos; as capas são imagens leves. A interface tem animações de entrada, movimento discreto e efeitos de interação, com respeito à preferência do sistema por movimento reduzido.

O retrato da página Ministério usa a nova foto enviada pelo usuário. O fundo verde foi removido e o recorte transparente está em `public/assets/eric-social-v3.png`; a foto intacta está guardada em `source/eric-social-original.jpg`.

## Executar

```bash
npm install
npm run dev
```

Abra `http://127.0.0.1:5173/`. Para gerar os arquivos estáticos, execute `npm run build`; a saída fica em `dist/`.

## Agendamento

O site público anterior não apresentava formulário ou API: o contato era feito pelo WhatsApp `+55 11 95789-2189`. Nesta prévia, o formulário valida os campos e abre uma mensagem para esse mesmo número. O usuário precisa concluir o envio no WhatsApp. Nenhuma reserva é confirmada automaticamente e nenhum dado é gravado em banco.

## Limites desta prévia

O código-fonte anterior e a prévia da tela de Agendamento não foram fornecidos. O fundo de palco agora usa a imagem enviada pelo usuário, e as telas Início e Ministério foram ajustadas às novas referências. Esta versão permanece apenas local; a produção não foi alterada.
