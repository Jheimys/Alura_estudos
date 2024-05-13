*** Settings ***
Library          SeleniumLibrary
Library          FakerLibrary     
Library    XML
Resource         setup_teardown.robot
Test Setup       Dado que eu acesse o Organo
Test Teardown    Fechar o navegador

*** Variables ***
${CAMPO_NOME}             id:form-nome
${CAMPO_CARGO}            id:form-cargo
${CAMPO_IMAGEM}           id:form-imagem
${CAMPO_TIME}             class:lista-suspensa
${BOTAO_CARD}             id:form-botao

@{selecionar_time}
...            //option[contains(.,'Programação')]
...            //option[contains(.,'Front-End')]
...            //option[contains(.,'Data Science')]
...            //option[contains(.,'Devops')] 
...            //option[contains(.,'UX e Design')]
...            //option[contains(.,'Mobile')]
...            //option[contains(.,'Inovação e Gestão')]

*** Test Cases ***
Verificar se ao preencher corretamente o formulário os dados são inseridos corretamente na lista e se um novo card é criado no time esperad
    Dado que preencha os campos do formulário
    E clique no botão criar card
    Então identificar o card no time esperado

Verificar se é possível criar mais de um card se preenchermos os campos corretamente
    Dado que preencha os campos do formulário
    E clique no botão criar card
    Então identificar 3 times no card esperado

Verificar se é possível criar um card para cada time se preenchermos os campos corretamente
    Dado que preencha os campos do formulário
    Então criar e identificar 1 card em cada time disponível

    
*** Keywords ***
Dado que preencha os campos do formulário
    ${Nome}        FakerLibrary.First Name
    Input Text    ${CAMPO_NOME}       ${Nome}

    ${Cargo}       FakerLibrary.Job
    Input Text    ${CAMPO_CARGO}      ${Cargo}

    ${Image}        FakerLibrary.Image Url
    Input Text    ${CAMPO_IMAGEM}     ${Image}    width=100    

    Click Element    ${CAMPO_TIME}
    Click Element    ${selecionar_time}[0] 
E clique no botão criar card
    Click Element    ${BOTAO_CARD} 
 Então identificar o card no time esperado
     Element Should Be Visible   class:colaborador

Então identificar 3 times no card esperado
    FOR    ${i}    IN RANGE    1    3
        Dado que preencha os campos do formulário
        E clique no botão criar card   
    END
    Sleep     5s

Então criar e identificar 1 card em cada time disponível
    FOR    ${indice}    ${time}    IN ENUMERATE    @{selecionar_time}
        Dado que preencha os campos do formulário
        Click Element    ${time}
        E clique no botão criar card        
    END
    Sleep    10s