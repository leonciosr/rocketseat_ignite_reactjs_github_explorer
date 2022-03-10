# **Github Explorer**

## Informações
Esse projeto é fruto do curso _**Chapter I - Fundamentos do ReactJS**_ ministrado pela [Rocketseat](https://www.rocketseat.com.br/) no **Ignite**.

## Descrição do módulo
No módulo foi criado a estrutura base de uma aplicação React utilizando ferramentas como Webpack, Babel, Webpack Dev server, SASS, Source Maps, Fast Refresh e apresentado conceitos importantes do React como componentes, propriedades, estados e hooks além da aplicação do TypeScript no projeto para adicionar tipagem estática à aplicação.

## Pontos de Atenção
No início do projeto encontrei algumas falhas ao executar o projeto. Para tratá-los precisei executar os seguines comandos:

```sh
# Utilizando o YARN
yarn config set "strict-ssl" false
yarn global add windows-build-tools 

# Utilizando o NPM
npm config set strict-ssl false 
npm install --global windows-build-tools
```

## Inicializando um projeto
Para inicializar um novo projeto baseado em Javascript utilize um dos comandos abaixo:
```sh 
yarn init -y
ou 
npm init -y
```

E adicione as dependências necessárias.

## Dicas
* _**yarn outdated**_ - show list outdated packages versions | a quick scan if there are any packages that need upgrade
* _**yarn upgrade**_ - upgrade all minor versions of outdated packages.
* _**yarn upgrade-interactive**_ - to progressively upgrade packages from _"guaranteed to not break"_ to _"will probably break something"_.
