import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router';

interface props {
  pagesNumber: number;
}

export const Pagination = ({ pagesNumber }: props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getQueryPage = searchParams.get('page') || '1';
  const page = isNaN(+getQueryPage) ? 1 : +getQueryPage;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pagesNumber) return;
     searchParams.set('page', newPage.toString());
  setSearchParams(searchParams);

  };
 
  return (
    <div className="text-center">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </Button>
      {Array.from({ length: pagesNumber }).map((_, index) => (
        <Button
          key={index}
          variant={page === index + 1 ? 'default' : 'outline'}
          size="sm"
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        size="sm"
        disabled={page === pagesNumber}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </Button>
    </div>
  );
};
