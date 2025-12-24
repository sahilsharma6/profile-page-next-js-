type BadgeProps = {
  label: string;
  variant?: "primary" | "success" | "warning" | "admin" | "manager" | "member";
  icon?: React.ReactNode;
};

export default function Badge({
  label,
  variant = "primary",
  icon,
}: BadgeProps) {
  const styles = {
    primary: "bg-blue-200 text-blue-800",
    success: "bg-success text-white",
    warning: "bg-warning text-black",
    admin: "bg-red-200 text-red-800",
    manager: "bg-orange-200 text-orange-800",
    member: "bg-green-200 text-green-800",
  };

  return (
    <span
      className={`inline-flex gap-1 mx- items-center px-3 py-1 rounded text-xs font-medium bg-gray-200 text-gray-700  ${styles[variant]}`}
    >
      {icon}
      {label}
    </span>
  );
}
