# Тестове завдання на позицію Junior Software Developer (Інтерна) в компанію Lisovary

SPA з хостингом на firebase [клац](https://test-assigment-lisovary-chakra.web.app/)

## На чому я писав

У цьому проєкті я використав React, з такими бібліотеками як:

- react-router-dom
- chakra-ui
- react-date-picker
- husky
  та інші

Усі таски, оновлюються в той самий момент, коли пише користувач, не треба
клікати на додаткові кнопки

### Проєкт повністю responsive, на ПК і смартфонах виглядає бумбічєскі

## Task 1

### 1. Трикутники

простий цикл, який будує спочатку пробіли, потім ставить знак (який вибрав
користувач) та ставить перенос стрічки.

## Task 2

### 2. НСД для 4х чисел

Думав спочатку робити через Евкліда, але оскільки він рекусивний, а нам треба
знайти аж від 4-ох змінних НСД, то програма просто зависала, тому я вирішив все
таки зробити рекурсією але трошки простіше

## Task 3

### 3. День тижня в році

Підключив бібліотеку для вибору дати з календарем, а також локалізував, потім
просто беру число дня тижня цього дня, та використовую його як індекс масиву з
нормалізованим ім'ям цього дня

## Task 4

### 4. Розпарсити математичний вираз

Проходив це на алгоритмах, моя реалізація цього методу виграла у конкурсі
присвяченому цьому методу, там були і степені і множення і від'ємні числа, але і
написаний він був на пітоні (python). Отже в чому суть, людина вводить свій
приклад, ми спочатку маєм переробити його у постфіксний вигляд, а-ля 2 + 2 - 6
--> 2 2 6 - +. А далі йде простий перебор...

## Task 5

### 5. Поміняти місцями без спеціальних операторів

Не дуже зрозумів суть завдання, але я залишив свій коментар, що якби не було
state-у, я б простими арифметичними діями, поміняв місцями дві змінні.
