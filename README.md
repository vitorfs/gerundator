Gerundator
==========

Um plugin jQuery para adicionar "loading states" nos botões de sua aplicação

Sobre
-----

Em aplicações onde é necessário realizar processamentos pesados no lado do servidor, é conveniente desabilitar o botão de ação após o primeiro envio, para evitar que o usuário submeta o formulário mais vezes, gerando erros ou comportamentos inesperados.

A utilização do Gerundator permite habilitar e desabilitar os botões de ação, colocando o verbo da ação no gerúndio durante a execução: “Enviar” para “Enviando…”, “Salvar” para “Salvando…”, “Atualizar” para “Atualizando…” etc.

Funções
-------

    disable([true|false])
Habilita ou desabilita um botão, colocando o verbo no gerúndio.

    toggleDisable()
Desabilita o botão caso ele esteja habilitado e habilita o botão caso ele esteja desabilitado, colocando o verbo no gerúndio.

Utilização
----------

    $("button").toggleDisable();
    
    <button type="button" id="btn-enviar">Enviar</button>
    <script>
      $("#btn-enviar").click(function () {
        var btn = $(this);
        $.ajax({
          url: "processa-form.php"
          beforeSend: function () {
            btn.disable(true); // desabilita o botão antes da requisição, usando o Gerundator
          }
          success: function (data) {
            // execução em caso de sucesso
          }
          complete: function () {
            btn.disable(false); // habilita o botão após o processamento
          }
        });
      });
    </script>
