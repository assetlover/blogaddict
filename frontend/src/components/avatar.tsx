export const Avatar = ({
  authorName,
  size = 4,
}: {
  authorName: string;
  size?: number;
}) => {
  return (
    <div
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      className="relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
    >
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {authorName.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};
