async function Posts(req, res) {

	const dynamicDate = new Date();

	const id = req.query.id;

	const wpPosts = await fetch(`${process.env.POSTS_API_URL}/${id}`)
	const posts = await wpPosts.json()

	res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

	res.json({
		date: dynamicDate.toGMTString(),
		posts
	})

}

export default Posts;
