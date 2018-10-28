const user = "tlystad24"
const url = `https://api.github.com/users/${user}`;

let text = document.getElementById("repos");

fetch(url)
	.then((response) => response.json())
	.then(data => {
		let { public_repos } = data;
		text.innerHTML = generator(public_repos);
	});


let generator = (repos) => {
	return `I currently have ${repos} ${repos === 1 ? 'repo' : 'repos'} on GitHub`
}