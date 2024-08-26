export const formFixtures = {
	form1: '<form method="post" action="#"></form>',
	form2:
		'<form method="post" action="/users"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea><input type="submit" value="Save"></form>',
	form3:
		'<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="wow"></form>',
	form4:
		'<form method="post" action="#"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>',
	form5: `Error: Field 'age' does not exist in the template.`,
};
