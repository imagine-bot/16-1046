// pages/index.tsx
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to our SaaS app</h1>
      <Link href="/pricing">
        <a>See Pricing</a>
      </Link>
    </div>
  );
};

export default HomePage;