async function Tempo(request, response) {

	const dynamicDate = new Date();

	const wpPosts = await fetch(process.env.POSTS_API_URL)
	const posts = await wpPosts.json()

	response.json({
		date: dynamicDate.toGMTString(),
		posts
	})

}

export default Tempo;
