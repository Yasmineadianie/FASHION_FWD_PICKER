import { AuthContext } from "@/context/AuthContext/AuthContext"
import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
//import { useNavigate } from "react-router";




const ProfilePage = () => {
const {userData} = useContext(AuthContext);
//const navigate = useNavigate();

  return (
     <>
    <section>
        <Container>
            <Row>
                <Col>
                    <h2>Tu perfil</h2>
                    <hr /> 
                    <p>Nombre: {userData?.name}</p>
                    <p>Apellidos: {userData?.lastname}</p>
                    <p>Email: {userData?.email}</p>
                    <p>Teléfono: {userData?.phone_number}</p>
                        
                </Col>
                <Col>
                    <img className='image-profile' src={`${import.meta.env.VITE_SERVER_IMAGES}/userDatas/${userData?.avatar}`} alt="" />
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <div className='d-flex flex-column gap-2'>
                        {/* <Button onClick={()=>navigate('/edituserData')}>Editar</Button>
                        <Button>Eliminar</Button> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row className='mt-5 mb-5 d-flex justify-content-center'>
                <Col xl={4}>
                    {/* {!showFormNewTravel ? 
                        <Button onClick={()=>setShowFormNewTravel(true)}>Añadir viaje</Button>
                        :
                        <FormNewTravel setShowFormNewTravel={setShowFormNewTravel}/>
                    } */}
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    {/* <userDataTravelsGallery /> */}
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default ProfilePage