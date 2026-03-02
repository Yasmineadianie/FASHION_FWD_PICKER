import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const ProfilePage = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
               <p style={{ color: 'goldenrod', fontWeight: 'bold' }}>
                  Your Account
                </p>
              <hr />
              <p>Name: {userData?.name}</p>
              <p>Last Name: {userData?.lastname}</p>
              <p>Email: {userData?.email}</p>
              <p>Tel: {userData?.phone_number}</p>

              {userData?.type === 1 && (
                <Row className="mt-3">
                  <Col>
                    <button
                      onClick={() => navigate('/user/wishList')}
                      className="btn btn-dark"
                    >
                      User wishList
                    </button>
                  </Col>
                </Row>
              )}

              {userData?.type === 2 && (
                <p style={{ color: 'goldenrod', fontWeight: 'bold' }}>
                  Admin Account
                </p>
              )}
            </Col>
          </Row>

          {userData?.type === 2 && (
            <Row className="mt-3">
              <Col>
                <button
                  onClick={() => navigate('/admin')}
                  className="btn btn-dark"
                >
                  Admin Dashboard
                </button>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};
export default ProfilePage;
