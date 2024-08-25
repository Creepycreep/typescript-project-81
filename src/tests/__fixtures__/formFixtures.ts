export const formFixtures = {
	form1: '<form action="#" method="post"></form>',
	form2:
		'<form action="/users" method="post"><input type="text" value="rob" name="name"><textarea cols="20" rows="40" as="textarea" name="job">hexlet</textarea></form>',
	form3:
		'<form action="#" method="post"><input type="text" value="rob" class="user-input" name="name"><input type="text" value="hexlet" name="job"></form>',
	form4:
		'<form action="#" method="post"><textarea cols="50" rows="50" as="textarea" name="job">hexlet</textarea></form>',
	form5: `Error: Field 'age' does not exist in the template.`,
};
