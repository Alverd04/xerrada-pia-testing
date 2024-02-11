interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return <div className="card">{title}</div>;
}
