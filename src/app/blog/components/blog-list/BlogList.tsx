import { IPostApi } from "@/domain/interfaces/blog.api.interface";

import BlogCardHorizontal from "../blog-card-horizontal/BlogCardHorizontal";
import SmallSetPagination from "@/app/shared/pagination/SmallSetPagination";

interface BlogListProps {
  posts: IPostApi[];
  get_blog_list_page: (page: number) => void;
  count: number;
}

function BlogList({ posts, get_blog_list_page, count }: BlogListProps) {
  return (
    <div className="relative overflow-hidden px-5">
      <div role="list" className="space-y-11 gap-8">
        {posts.map((post, index) => (
          <BlogCardHorizontal post={post} key={index} index={index} />
        ))}
      </div>
      <SmallSetPagination
        list_page={get_blog_list_page}
        list={posts}
        count={count}
      />
    </div>
  );
}
export default BlogList;
