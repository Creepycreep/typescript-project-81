export const formFixtures = {
	form1: '<form action="#" method="post"></form>',
	form2:
		'<form action="/users" method="post"><label for="name">Name</label><input type="text" value="rob" name="name"><label for="job">Job</label><textarea cols="20" rows="40" as="textarea" name="job">hexlet</textarea><input type="submit" value="Save"></form>',
	form3:
		'<form action="#" method="post"><label for="name">Name</label><input type="text" value="rob" class="user-input" name="name"><label for="job">Job</label><input type="text" value="hexlet" name="job"><input type="submit" value="wow"></form>',
	form4:
		'<form action="#" method="post"><label for="job">Job</label><textarea cols="50" rows="50" as="textarea" name="job">hexlet</textarea></form>',
	form5: `Error: Field 'age' does not exist in the template.`,
};
