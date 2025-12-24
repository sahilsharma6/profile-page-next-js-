type KeyValueRowProps = {
  label: string;
  value?: React.ReactNode;
};

export default function KeyValueRow({ label, value }: KeyValueRowProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
}
