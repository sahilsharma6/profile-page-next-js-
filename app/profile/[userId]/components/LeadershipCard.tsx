import Badge from "./ui/Badge";
import InfoCard from "./ui/InfoCard";
import KeyValueRow from "./ui/KeyValueRow";

type LeadershipCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export default function LeadershipCard({
  name,
  role,
  email,
  phone,
}: LeadershipCardProps) {
  return (
    <InfoCard>
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">{name}</h4>
        <Badge label={role} />
      </div>

      <KeyValueRow label="Email" value={email} />
      <KeyValueRow label="Phone" value={phone} />
    </InfoCard>
  );
}
