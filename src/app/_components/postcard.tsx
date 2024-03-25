type Card = {
  createdBy: {
    name: string | null;
  };
  name: string;
  createdAt: Date;
};

export function PostCard({ post }: { post: Card }) {
  return (
    <div className="flex flex-col min-w-40 h-full gap-4 rounded-xl bg-black/50 p-4 hover:bg-white/20 group">
      <h2 className="font-semibold text-lg">{post.name}</h2>
      <p className="text-sm text-gray-600 group-hover:text-gray-950">
        Created by {post.createdBy.name ?? "N/A"} on{" "}
        {new Date(post.createdAt).toLocaleString()}
      </p>
    </div>
  );
};