import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './dashboard.css'

interface MenuProps {
  title: string;
  route: string;
  description: string;
  icon: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menu: MenuProps[] = [
    {
      title: 'Users',
      route: '/admin/allUsers',
      description: 'Manage registered users',
      icon: 'fa-solid fa-users',
    },
    {
      title: 'Create Product',
      route: '/admin/createProduct',
      description: 'Add a new product to the store',
      icon: 'fa-solid fa-plus',
    },
    {
      title: 'Products',
      route: '/admin/products',
      description: 'View and manage all products',
      icon: 'fa-solid fa-shirt',
    },
    {
      title: 'All Brands',
      route: '/brand',
      description: 'View all available brands',
      icon: 'fa-solid fa-tag',
    },
  ];

  const [search, setSearch] = useState<string>('');
  const [filterMenu, setFilterMenu] = useState<MenuProps[]>(menu);

  const searchSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newArray = menu.filter((elem) =>
        elem.title.toLowerCase().includes(search.toLowerCase()) ||
        elem.description.toLowerCase().includes(search.toLowerCase()),
    );
    setFilterMenu(newArray);
  };

  const reset = () => {
    setSearch('');
    setFilterMenu(menu);
  };

  return (
    <Container className='mt-4'>
      <header className='dashboard-header'>
        <h1 className='title-d'>Admin Dashboard</h1>
        <div className="search">
          <input
            className="input-search"
            type="text"
            placeholder="Search section🔍"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <button className="btn btn-dark" onClick={searchSection}>
            Search
          </button>
          <button className="btn btn-outline-secondary" onClick={reset}>
            Clear
          </button>
        </div>
      </header>

      <div className="dashboard-grid">
        {filterMenu.map((elem, idx) => (
          <div key={idx} className="dashboard-card">
            <div
              className="dashboard-card"
              onClick={() => navigate(elem.route)}
            >
              <i className={`${elem.icon} fa-2x mb-3`} style={{ color: '#B5956A' }}  ></i>
              <h5 className='fs-3'>{elem.title}</h5>
              <p className="text-muted small">{elem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AdminDashboard;
