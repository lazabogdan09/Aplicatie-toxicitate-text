# Aplicație detecție toxicitate text

>Aplicația detectează dacă textul introdus conține limbaj obscen, insulte, amenințări, etc. Acest program a fost realizat cu [TensorFlow.js](https://www.tensorflow.org/js/) versiunea 1.2.2 și [Angular CLI](https://github.com/angular/angular-cli) versiunea 8.0.6.

## Model utilizat

>Modelul utilizat este un model preantrenat, realizat de cei de la TensorFlow, numit [Toxicity classifier](https://github.com/tensorflow/tfjs-models/tree/master/toxicity). Modelul a fost antrenat pe ~2 milioane de comentarii în limba engleză din următorul [dataset](https://figshare.com/articles/dataset/data_json/7376747).

## Instalarea modulelor NPM

>În terminalul de comandă se rulează comanda `npm install`. Aceasta va instala toate modulele necesare executării programului.

## Server de dezvoltare

>În terminal se rulează `ng serve` pentru a creea un server local. Navigați în browser la urmatoarea adresă `http://localhost:4200/`. Aplicația se va actualiza după fiecare modificare efectuată în cod.

## Schelă cod

>Pentru generarea de noi componente se introduce în terminal `ng generate component componentName`. Se mai pot genera de asemenea: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construirea aplicației

>Rulați `ng build` în terminal pentru a construi aplicația. Artefactele de construcție vor fi stocate în directorul `dist/`.

## Efectuarea de teste unitare

>Rulați `ng test` în terminal pentru a rula teste unitare via [Karma](https://karma-runner.github.io).

## Efectuarea de teste end-to-end

>Rulați `ng e2e` în terminal pentru a rula teste end-to-end via [Protractor](http://www.protractortest.org/).

## Mai multe informații

>Pentru a obține informații rulați `ng help` sau navigați pe pagina [Angular CLI Overview and Command Reference](https://angular.io/cli).
