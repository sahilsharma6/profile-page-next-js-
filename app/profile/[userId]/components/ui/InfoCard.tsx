type InfoCardProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function InfoCard({
  title,
  className,
  children,
}: InfoCardProps) {
  return (
    <div
      className={`bg-base-100 shadow  border border-gray-200 rounded-lg p-4 ${
        className || ""
      }`}
    >
      {title && (
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
