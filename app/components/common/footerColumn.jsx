export default function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map(({ id, name, url }) => (
          <li key={id}>
            <a
              href={url}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
