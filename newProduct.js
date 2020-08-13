if (currentUser.followers_list.length > 0) {
	currentUser.followers_list.map(async function (follower) {
		await createAndEmitNotification(
			req.app.io,
			`New Product!`, //notification type
			follower, // receiver id
			`${currentUser.name} added a new product`, // title
			product.image, // image
			product.description, // description
			product.url, // url
			(product = {
				id: product._id,
				lastprice: product.lastprice,
				currentprice: product.currentprice
			}),
			(follower = null)
		);
	});
}
