let items = document.getElementById('displayItems');

const url = 'http://localhost:3000/api/cameras';

fetch(url).then(function (res) {
	res
		.json()
		.then(function (data) {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				displayCamera(data[i]);
			}
		})
		.catch(function (err) {
			console.log('error: ' + err);
		});
});

function displayCamera(data) {
	// card-layout
	const column = document.createElement('div');
	const card = document.createElement('div');
	const img = document.createElement('img');
	const cardImagesOverlay = document.createElement('div');
	let productPrice = document.createElement('span');
	const cardBody = document.createElement('div');
	let productName = document.createElement('h5');
	let productDescription = document.createElement('p');
	let btnProductPage = document.createElement('a');

	column.classList.add('col');
	card.classList.add('card');
	img.classList.add('card-img-top');
	img.setAttribute('id', 'productImage');
	cardImagesOverlay.classList.add('card-img-overlay');
	productPrice.classList.add(
		'bg-primary',
		'text-white',
		'badge',
		'p-3',
		'position-absolute',
		'top-0',
		'end-0'
	);

	cardBody.classList.add('card-body');
	productName.classList.add('card-title');
	productDescription.classList.add('card-text');
	btnProductPage.classList.add('btn', 'btn-primary');
	btnProductPage.setAttribute('href', '#');

	productPrice.innerText = data.price / 100 + '.00€';
	productName.innerText = data.name;
	productDescription.innerText = data.description;
	img.src = data.imageUrl;
	btnProductPage.innerText = 'Voir le détail';

	items.append(column);
	column.appendChild(card);
	card.append(img, cardImagesOverlay, cardBody);
	cardImagesOverlay.appendChild(productPrice);
	cardBody.append(productName, productDescription, btnProductPage);
}
