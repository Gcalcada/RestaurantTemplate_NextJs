import Link from 'next/link';

const Breadcrumbs = ({ paths }) => {
  return (
    <nav className="mb-4 text-sm">
      <ul className="flex space-x-2">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index < paths.length - 1 ? (
              <>
                <Link href={path.href} className="text-blue-600 hover:text-blue-800">
                  {path.name}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <span className="text-gray-500">{path.name}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
