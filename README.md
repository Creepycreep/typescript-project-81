### Hexlet tests and linter status:

[![Actions Status](https://github.com/Creepycreep/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Creepycreep/typescript-project-81/actions)

[![QA](https://github.com/Creepycreep/typescript-project-81/actions/workflows/QA.yml/badge.svg)](https://github.com/Creepycreep/typescript-project-81/actions/workflows/QA.yml)

Пример использования генератора форм:

1. Необходимо создать шаблон формы:
   `const template = { name: 'rob', job: 'hexlet', gender: 'm' };`
2. Далее использовать метод генерации формы
   Первый аргумент - шаблон, второй (необязательный, либо пустой объект) - атрибуты формы, третий (необязательный) - поля формы, первый аргумент - name инпута, второй (необязательный) - атрибут инпута
   `HexletCode.formFor(template, {url: '/users' }, (f) => {f.input('name', { class: 'user-input' });f.input('job');})`
3. Ожидаемый результат:
   `<form action="/users" method="post"><label for="name">Name</label><input type="text" value="rob" name="name"><label for="job">Job</label><textarea cols="20" rows="40" as="textarea" name="job">hexlet</textarea><input type="submit" value="Save"></form>`
