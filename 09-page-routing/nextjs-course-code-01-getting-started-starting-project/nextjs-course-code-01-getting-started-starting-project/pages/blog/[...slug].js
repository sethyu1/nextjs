import { useRouter } from "next/router"

function BlogPostsPage() {
    const router = useRouter();
    console.log(router.query);  //slug: Array [ "2022", "002" ]

    const slug = router.query.slug;
    const [a, b] = Array.isArray(slug) ? slug : [];

    return (
        <div>
            <h1>Blog Posts Page</h1>
            <p> {a}</p>
            <p>{b}</p>
        </div>
    )
}

export default BlogPostsPage